import LoginPage from '../../../pageObjects/login.page';
const login = require('../testData/expected.json').login;
//const user = require('../testData/expected.json').user;
import ProfilePage from '../../../pageObjects/profile.page';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import user from '../../../testData/user';

describe('New user registration page', () => {
  before(() => {
    LoginPage.open();
  });

  it('should Check header', function () {
    expect(LoginPage.headerLogin.getText()).eq(login.header);
  });

  it('should Successful login new user', () => {
    LoginPage.validLogin(user.new.email, user.new.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
  });
});
