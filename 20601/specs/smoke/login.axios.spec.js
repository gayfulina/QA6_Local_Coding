import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import axios from 'axios';
const host = 'https://server-stage.pasv.us';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHFhNi51cyIsInVzZXJJZCI6IjVmMWU4MmRjMzAzY2E1MDBlZDY1NzQ4NCIsImNvZGV3YXJzSWQiOm51bGwsImlhdCI6MTU5NjI1NDkwNSwiZXhwIjoxNTk2NTE0MTA1fQ.sBNCwPY4W2tTrXdQckT8ZaYIa9geCpwHZMa7rKPg82w';
const userId = '5f1e82dc303ca500ed657484';

describe('LOGIN', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-001 Successful login as an admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('TC-002 Successful login as a new user', () => {
    LoginPage.validLogin(user.new.email, user.new.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
  });

  it('API check the new user', async () => {
    const arr = await axios({
      method: 'get',
      url: `${host}/user/email/${newUser.email}`,
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.data)
      .catch(err => err.response.data);
    console.log(arr);
    expect(arr.payload.name).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
  after(async () => {
    const delUser = await axios({
      method: 'delete',
      url: `${host}/user/email/${newUser.email}`,
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.data)
      .catch(err => err.response.data);
    console.log(delUser);
    expect(delUser.success).true;
  });
});
