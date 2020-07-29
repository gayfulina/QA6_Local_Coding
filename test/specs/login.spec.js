import {expect}  from "chai";
import LoginPage from "../../Page/LoginPage";
import loginData from "../../Data/loginData"
import userData from "../../Data/userData"
import ProfilePage from "../../Page/ProfilePage";
describe('check login page', () => {

  before(()=> {
    LoginPage.open();
  })

  it('should have correct title', () => {
    expect(LoginPage.header.getText()).eq(loginData.headers.title)
  });

  it('elements fild and links is present', () => {
    expect(LoginPage.inputPassword.isDisplayed()).eq(true);
    expect(LoginPage.inputEmail.isDisplayed()).eq(true);
    expect(LoginPage.loginBtn.isDisplayed()).eq(true);
    expect(LoginPage.linkGoogle.isDisplayed()).eq(true);
    expect(LoginPage.linkFacebook.isDisplayed()).eq(true);
    expect(LoginPage.linkResetPassword.isDisplayed()).eq(true);
    expect(LoginPage.linkCreateNewAccount.isDisplayed()).eq(true);
  });

  it('should links be clickable', () => {
    expect(LoginPage.linkGoogle.isClickable()).eq(true)
    expect(LoginPage.linkCreateNewAccount.isClickable()).eq(true)
    expect(LoginPage.linkResetPassword.isClickable()).eq(true)
    expect(LoginPage.linkFacebook.isClickable()).eq(true)
    expect(LoginPage.linkHomePage.isClickable()).eq(true)
  });

  it('should fill out email', () => {
    LoginPage.inputEmail.setValue(userData.userAdmin.email)
    expect(LoginPage.loginBtn.isClickable()).eq(false)
  });

  it('should fill out password', () => {
    LoginPage.inputPassword.setValue(userData.userAdmin.password)
    expect(LoginPage.loginBtn.isClickable()).eq(true)
  });

  it('should click login btn', () => {
    LoginPage.loginBtn.click()
    browser.waitUntil(()=> ProfilePage.header.getText()===userData.userAdmin.headerAdmin)
  });

});