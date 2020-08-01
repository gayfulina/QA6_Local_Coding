import LoginPage from '../../../pageObjects/login.page';
import RegistrationPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/reset.password';

const testData = require('../testData/expected.json');

describe('CHECK RESET PASSWORD PAGE', () => {
  before(() => {
    ResetPasswordPage.open();
  });

  it('should Send the request to reset Password', function () {
    ResetPasswordPage.requestLinkToResetPassword(testData.correctEmail.email);
  });

  it('should Check the invalid request', function () {
    browser.refresh();
    expect(ResetPasswordPage.invalidRequest(testData['incorrectEmail'].email)).eq(testData['error'].errorMessage);
  });

  it('should Check the link to Register Page', function () {
    ResetPasswordPage.goToRegisterPage();
    expect(RegistrationPage.headerRegister.getText()).eq(testData.header.headerRegister);
  });

  it('should Check the link to Login Page', function () {
    ResetPasswordPage.open();
    ResetPasswordPage.goToLoginPage();
    expect(LoginPage.getLogoutConfirmation()).eq(testData.text.headerText);
  });
});
