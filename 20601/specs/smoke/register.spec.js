import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import { textStep1, data , textStep2, textLogin } from '../../data/registerAndLoginData';


describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('should verify header text', () => {
    expect(RegisterPage.headerRegister.getText()).eq(textStep1.header);
  });

  // create separate PO and test for Terms and agreements
  xit('should verify that Terms and agreements work', function() {
    RegisterPage.termsAndAgreements();
  });

  it('should populate fields and submit form', () => {
    RegisterPage.registerUser(data);
    expect(RegisterStep2Page.headerRegisterStep2.getText()).contains(textStep2.header);
  });

  //detailed register by Irina G
  // it('should populate fields and submit form', () => {
  //     RegisterPage.firstNameField.setValue(userStep1.firstName);
  //     RegisterPage.lastNameField.setValue(userStep1.lastName);
  //     RegisterPage.emailField.setValue(userStep1.email);
  //     RegisterPage.passwordField.setValue(userStep1.password);
  //     RegisterPage.termsAndAgreementsCheckbox.click();
  //     RegisterPage.registerForm()
  // })

    it('verify that Login Link redirect user from Register Page to Login Page', function () {
    RegisterPage.open();
    RegisterPage.loginLink.click();
    expect(LoginPage.header.getText()).contains(textLogin.header);
  });
});
