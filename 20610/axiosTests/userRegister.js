import axios from 'axios';

export function userRegister(resBody) {
  return axios
    .post(`${host}/user`, resBody)
    .then(res => res.status)
    .catch(err => console.log(err));
}