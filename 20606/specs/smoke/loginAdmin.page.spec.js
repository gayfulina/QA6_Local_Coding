import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import wait_time_medium from '../../../testData/waitTimes';

describe('SUCCESSFUL LOGIN AS ADMIN', () => {

  before(() => {
    LoginPage.open();
  });

  it('Login as role: "ADMIN" (valid input)', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badge.waitForDisplayed(wait_time_medium);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.admin.firstName} ${user.admin.lastName}`);
  });

});
