import axios from 'axios';
import users from '../../testData/user';
let host = 'https://server-stage.pasv.us';

export const userUpdateRole = async (userEmail, userPassword, role) => {
  const response = await axios.post(`${host}/user/login`, {
    email: users.admin.email,
    password: users.admin.password,
  });
  const token = response.data.token;

  const resp = await axios.post(`${host}/user/login`, {
    email: `${userEmail}`,
    password: `${userPassword}`,
  });
  const userId = resp.data.userId;
  console.log(userId);

  return axios({
    method: 'patch',
    url: `${host}/user/${userId}`,
    headers: {
      Authorization: token,
    },
    data: {
      roles: [`${role}`],
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
};

/* to call the function in your tests After hook should be added similar to below.
Before you need register user using faker or using yourself user (do not change role of Julia users).
Example of using userUpdateRole in our folder smoke => settingsPassword.specs.smoke.js

describe('', () => {
  it('Should update role a user', async () => { // can be before, after, it
  const res = await userUpdateRole(userEmail, userPassword, role); //where userEmail is the email and password of the user you want change role, role is a string exp.: 'student'
    console.log(res)
  expect(res.success).eq(true);
  });
})

*/
