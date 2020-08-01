import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import {textLogin} from '../../../20601/data/registerAndLoginData'

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-005 verify that header of the Login Page is "Welcome back!"', function() {
    expect(LoginPage.headerLogin.getText()).contains(textLogin.header);
  });

  it('TC-006 verify that placeholder of Email Field is "Email!"', function() {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(textLogin.email);
  });

  it('TC-007 verify that placeholder of Password Field is "Password!"', function() {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(textLogin.password);
  });

});
