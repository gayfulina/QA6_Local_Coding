const axios = require('axios');
const user = require('../testData/user');
const host = 'https://server-stage.pasv.us';

async function afterHook() {
  const userNewDelete = await axios({
    method: 'delete',
    url: `${host}/user/email/${user.new.email}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
  console.log(userNewDelete);
  expect(userNewDelete.success).true;
}

module.exports = afterHook;
