import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import RegistrationPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/reset.password';

const testData = require('../../testData/login.json');
const testResults = require('../../testResult/login.expected.json');

describe('Check login', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-2: Should check invalid login', function () {
    LoginPage.invalidLogin(testData['TC-2'].username, testData['TC-2'].password);
    browser.waitUntil(() => LoginPage.errorMessageCloseBtn.isClickable());
    LoginPage.closeMessage();
    expect(LoginPage.getLogoutConfirmation()).to.be.equal(testResults['TC-2'].headerText);
  });

  it('TC-1: Should check valid login', function () {
    browser.refresh();
    LoginPage.validLogin(testData['TC-1'].username, testData['TC-1'].password);
    browser.waitUntil(() => browser.getUrl().includes('profile'));
    expect(ProfilePage.getLoginConfirmation()).to.be.equal(testResults['TC-1'].headerText);
  });

  it('TC-3: should open the Registration page', function () {
    browser.refresh();
    LoginPage.goToRegisterPage();
    expect(RegistrationPage.headerRegister.getText()).to.be.equal(testResults['TC-3'].headerRegister);
  });

  it('TC-4: should open the Reset Password Page', function () {
    LoginPage.open();
    LoginPage.goToResetPasswordPage();
    expect(ResetPasswordPage.header.getText()).to.be.equal(testResults['TC-4'].headerResetPassword);
  });
});
