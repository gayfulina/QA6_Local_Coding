import RegisterPage from '../../../pageObjects/register.page';
import { registerPageTestResult } from '../../testResult/register';

describe('REGISTER PAGE STEP 1', function () {
  before(() => {
    RegisterPage.open();
  });

  describe('HEADER', function () {
    it('header should be displayed', function () {
      expect(RegisterPage.headerRegister.isDisplayed()).true;
    });

    it('header should have correct text', function () {
      expect(RegisterPage.headerRegister.getText()).eq(registerPageTestResult.header);
    });
  });

  describe('ELEMENTS ARE DISPLAYED', function () {
    it('First Name field should be displayed', function () {
      expect(RegisterPage.firstNameInput.isDisplayed()).true;
    });

    it('Last Name field should be displayed', function () {
      expect(RegisterPage.lastNameInput.isDisplayed()).true;
    });

    it('Email field should be displayed', function () {
      expect(RegisterPage.email.isDisplayed()).true;
    });

    it('Password field should be displayed', function () {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('Eye icon should be displayed', function () {
      expect(RegisterPage.eyeIconClosed.isDisplayed()).true;
    });

    it('Lock icon should be displayed', function () {
      expect(RegisterPage.lockIcon.isDisplayed()).true;
    });

    it('Terms and agreements link should be displayed', function () {
      expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
    });

    it('Register button should be displayed', function () {
      expect(RegisterPage.registerBtn.isDisplayed()).true;
    });

    it('Log in link should be displayed', function () {
      expect(RegisterPage.loginLink.isDisplayed()).true;
    });
  });
});
