import {expect} from 'chai';
import RegisterPage from '../../Page/RegisterPage';
import userData from '../../Data/userData';
import LoginPage from '../../Page/LoginPage';
import {headers} from '../../Data/registerData';
import ProfilePage from "../../Page/ProfilePage";

describe('register user', () => {
  before( () => {
      RegisterPage.open()
  });

  it('should check header', () => {
    expect($(RegisterPage.header).getText()).eq(headers.headerRegister)
  });

  it('should fill out filds and click submit btn', () => {
    RegisterPage.firstName.setValue(userData.userNew.firstName);
    RegisterPage.lastName.setValue(userData.userNew.lastName);
    RegisterPage.email.setValue(userData.userNew.email);
    RegisterPage.password.setValue(userData.userNew.password)
    RegisterPage.checkbox.click();
    RegisterPage.registerBtn.click();
    browser.waitUntil(()=> RegisterPage.headerRegister.isDisplayed())

  });

  it('should have correct header on page step 2', () => {
    expect(RegisterPage.headerRegister.getText()).eq(headers.headerStep2Page)
  });

  it('should skip btn be clickable ', () => {
    expect(RegisterPage.skipBtn.isClickable()).eq(true)
  });

  it('should fill out form', () => {
    RegisterPage.phone.setValue(userData.userNew.phone)
    RegisterPage.submitBtn.click()
    browser.waitUntil(()=> ProfilePage.header.getText() === userData.userNew.headerName)
  });

  it('should login new user', () => {
    LoginPage.open()
    LoginPage.inputEmail.setValue(userData.userNew.email)
    LoginPage.inputPassword.setValue(userData.userNew.password)
    LoginPage.loginBtn.click();
    browser.waitUntil(()=> ProfilePage.header.getText()===userData.userNew.headerName)
  });


});