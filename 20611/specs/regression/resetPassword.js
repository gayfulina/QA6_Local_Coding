import LoginPage from '../../../pageObjects/login.page';
import RegistrationPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';

const testData = require('../testData/expected.json');

describe('CHECK RESET PASSWORD PAGE', () => {
  before(() => {
    ResetPasswordPage.open();
  });

  it('TC-027-028 should Send the request to reset Password', function () {
    ResetPasswordPage.requestLinkToResetPassword(testData.correctEmail.email);
  });

  it('TC-029 should Check the invalid request', function () {
    browser.refresh();
    expect(ResetPasswordPage.invalidRequest(testData['incorrectEmail'].email)).eq(testData['error'].errorMessage);
  });

  it('TC-030 should Check the link to Login Page', function () {
    ResetPasswordPage.open();
    ResetPasswordPage.goToLoginPage();
    expect(LoginPage.getLogoutConfirmation()).eq(testData.text.headerText);
  });

  it('TC-031 should Check the link to Create one', function () {
    ResetPasswordPage.open();
    ResetPasswordPage.goToRegisterPage();
    expect(RegistrationPage.headerRegister.getText()).eq(testData.header.headerRegister);
  });
});
