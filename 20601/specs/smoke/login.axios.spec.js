import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import axios from 'axios';
import { userGetByEmail } from './apiFunctions';
const host = 'https://server-stage.pasv.us';
import newUser from '../../data/fakerData';
const userId = '5f1e82dc303ca500ed657484';

describe('LOGIN', () => {
  beforeEach(() => {
    LoginPage.open();
    console.log(process.env.ADMIN_TOKEN);
  });

  it('TC-001 Successful login as an admin', () => {
    console.log(process.env);
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
    const user = await userGetByEmail(newUser.email);
    console.log(user);
    expect(user.payload.name).eq(`${newUser.firstName} ${newUser.lastName}`);
  });

  after(async () => {
    const delUser = await axios({
      method: 'delete',
      url: `${host}/user/email/${newUser.email}`,
      headers: {
        Authorization: process.env.ADMIN_TOKEN,
      },
    })
      .then(res => res.data)
      .catch(err => err.response.data);
    console.log(delUser);
    expect(delUser.success).true;
  });
});
