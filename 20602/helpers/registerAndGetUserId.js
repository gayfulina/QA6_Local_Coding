import axios from 'axios';
import user from '../data/users';
let host = 'https://server-stage.pasv.us';

export const registerAndGetId = async (userEmail, userPassword) => {
  await axios.post(`${host}/user`, {
    email: `${userEmail}`,
    password: `${userPassword}`,
    firstName: 'LalaFirst',
    lastName: 'LalaLast',
    phone: '17775551122',
    about: '123123',
    goals: '123123',
    englishLevel: 'Pre-Intermediate',
    countryName: 'USA',
  });

  return axios
    .post(`${host}/user/login`, {
      email: `${userEmail}`,
      password: `${userPassword}`,
    })
    .then(res =>  res.data.userId)
    .catch(err => err.response.data);

};

describe('', () => {
  it('Register and get userId', async () => {
    const userId = await registerAndGetId(user.email, user.password); //where userEmail is the email and password of the user you want change role, role is a string exp.: 'student'
    expect(userId.length).eq(24);
    console.log(userId)
  });

});
