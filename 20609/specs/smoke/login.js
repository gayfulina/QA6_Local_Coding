import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import { admin } from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('LOGIN ADMIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('should fill out login form', function () {
    LoginPage.inputUsername.setValue(admin.email);
    LoginPage.inputPassword.setValue(admin.password);
    LoginPage.loginBtn.click();
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).equal(admin.firstName + ' ' + admin.lastName);
  });
});
