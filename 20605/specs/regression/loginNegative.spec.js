import LoginPage from '../../../pageObjects/login.page';
import { invalidUserCredentials } from '../../testData/login';
import { WAIT_TIME_SHORT } from '../../../testData/waitTimes';
import { admin, learner } from '../../../testData/user';
import { emptyField } from '../../testData/login';

describe('LOGIN PAGE (NEGATIVE SCENARIOS)', function() {
  beforeEach(() => {
    LoginPage.open();
  });
  it('user is not able to log in with invalid email and password', function() {
    LoginPage.login(invalidUserCredentials.email, invalidUserCredentials.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('user is not able to log in with valid email and invalid password', function() {
    LoginPage.login(admin.email, invalidUserCredentials.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('user is not able to log in with invalid email and valid password', function() {
    LoginPage.login(invalidUserCredentials.email, admin.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('user is not able to log in with valid email and password that doesnt match to the account', function() {
    LoginPage.login(admin.email, learner.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('user is not able to log in with valid email and empty password field', function() {
    LoginPage.login(admin.email, emptyField);
    expect(LoginPage.loginBtn.isEnabled()).false;
  });
  it('user is not able to log in with empty email field and valid password ', function() {
    LoginPage.login(emptyField, learner.password);
    expect(LoginPage.loginBtn.isEnabled()).false;
  });
});