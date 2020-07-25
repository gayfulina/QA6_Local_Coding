import LoginPage from "../../../pageObjects/login.page";
import { userAdmin } from '../../testData/login';


describe('LOGIN PAGE', function () {
 before( () => {
 LoginPage.open();
 })
  // it('header text Register Page ', function () {
  //   const text = LoginPage.header.getText();
  //   expect(text).eq(loginPage.header);
  // });

  it('should log in by admin', function() {
    LoginPage.inputUsername.setValue(userAdmin.email);
    LoginPage.inputPassword.setValue(userAdmin.password);
    LoginPage.btnSubmit.click();
    // LoginPage.alert.waitForDisplayed();
    // expect(LoginPage.header.getText()).eq(userAdmin.header);
  });
});