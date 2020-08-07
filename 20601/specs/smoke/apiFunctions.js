const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHFhNi51cyIsInVzZXJJZCI6IjVmMWU4MmRjMzAzY2E1MDBlZDY1NzQ4NCIsImNvZGV3YXJzSWQiOm51bGwsImlhdCI6MTU5NjI1NDkwNSwiZXhwIjoxNTk2NTE0MTA1fQ.sBNCwPY4W2tTrXdQckT8ZaYIa9geCpwHZMa7rKPg82w';
import axios from 'axios';
const host = 'https://server-stage.pasv.us';

export const userGetByEmail = email =>
  axios({
    method: 'get',
    url: `${host}/user/email/${email}`,
    headers: {
      Authorization: token,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
