const axios = require('axios');
const user = require('../testData/user');
const host = 'https://server-stage.pasv.us';
async function beforeHook() {
  const user = await axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: 'admin@qa6.us',
      password: 'admin',
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
  process.env.ADMIN_TOKEN = user.token; //We create variable for ALL folders "environment variable"
}

module.exports = beforeHook;
