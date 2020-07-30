import LoginPage from '../../../pageObjects/login.page';
import RegistrationPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/reset.password';

const testData = require('../../testData/login.json');
const testResults = require('../../testResult/login.expected.json');

describe('Check Reset password page', () => {
  before(() => {
    ResetPasswordPage.open();
  });

  it('TC-5: should send the request to reset password', function () {
    ResetPasswordPage.requestLinkToResetPassword(testData['TC-5'].email);
  });

  it('TC-6:should check the invalid request', function () {
    browser.refresh();
    expect(ResetPasswordPage.invalidRequest(testData['TC-6'].email)).to.be.equal(testResults['TC-6'].errorMessage);
  });

  it('TC-7: should check the link to Register page', function () {
    ResetPasswordPage.goToRegisterPage();
    expect(RegistrationPage.headerRegister.getText()).to.be.equal(testResults['TC-3'].headerRegister);
  });

  it('TC-8: should check the link to Login page', function () {
    ResetPasswordPage.open();
    ResetPasswordPage.goToLoginPage();
    expect(LoginPage.getLogoutConfirmation()).to.be.equal(testResults['TC-2'].headerText);
  });
});
