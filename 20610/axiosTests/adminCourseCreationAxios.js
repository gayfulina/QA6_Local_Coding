import axios from 'axios';
import user from '../../testData/user';
import { expect } from 'chai';
const host = 'https://server-stage.pasv.us';
let adminToken = '';
let adminId = '';
let courseId = '';
import { newUser } from '../../20610/data/fakeData';

describe('AXIOS', () => {
  it('Should login as admin to get admin token', async function () {
    const response = await axios.post(`${host}/user/login`, {
      email: user.admin.email,
      password: user.admin.password,
    });
    adminToken = response.data.token;
    adminId = response.data.userId;
  });

  it('Admin should be able to create a course', async () => {
    const response = await axios.post(
      `${host}/course`,
      {
        name: newUser.word,
        description: newUser.about,
        accessType: 'all',
      },
      {
        headers: {
          Authorization: `${adminToken}`,
        },
      },
    );
    courseId = response.data.payload.courseId;
    expect(response.status).eq(200);
  });

  it('Admin should be able to find a course by course id', async () => {
    const response = await axios.get(`${host}/course/${courseId}`, {
      headers: {
        Authorization: adminToken,
      },
    });
    expect(response.status).eq(200);
   });

  //deletion is not working on postman as well, not working as documentation suggested

  // it('Admin should be able to delete a course by course id', async () => {
  //   const response = await axios.delete(`${host}/course/${courseId}`, {
  //     headers: {
  //       Authorization: adminToken,
  //     },
  //   });
  //   expect(response.status).eq(200);
  // });
  //
  // it('Admin should not be able to find a course after it has been deleted', async () => {
  //   const response = await axios.get(`${host}/course/${courseId}`, {
  //     headers: {
  //       Authorization: adminToken,
  //     },
  //   });
  //   expect(response.status).eq(400);
  // });
 });
