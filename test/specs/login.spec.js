import LoginPage from "../../Page/LoginPage";
import loginData from "../../Data/loginData"
import userData from "../../Data/userData"
import ProfilePage from "../../Page/ProfilePage";
describe('check login page', () => {

  before(()=> {
    LoginPage.open();
  })

  it('should have correct title', () => {
    expect(LoginPage.header.getText()).toEqual(loginData.headers.title)
  });

  it('elements fild and links is present', () => {
    expect(LoginPage.inputPassword.isDisplayed()).toEqual(true);
    expect(LoginPage.inputEmail.isDisplayed()).toEqual(true);
    expect(LoginPage.loginBtn.isDisplayed()).toEqual(true);
    expect(LoginPage.linkGoogle.isDisplayed()).toEqual(true);
    expect(LoginPage.linkFacebook.isDisplayed()).toEqual(true);
    expect(LoginPage.linkResetPassword.isDisplayed()).toEqual(true);
    expect(LoginPage.linkCreateNewAccount.isDisplayed()).toEqual(true);
  });

  it('should links be clickable', () => {
    expect(LoginPage.linkGoogle.isClickable()).toEqual(true)
    expect(LoginPage.linkCreateNewAccount.isClickable()).toEqual(true)
    expect(LoginPage.linkResetPassword.isClickable()).toEqual(true)
    expect(LoginPage.linkFacebook.isClickable()).toEqual(true)
    expect(LoginPage.linkHomePage.isClickable()).toEqual(true)
  });

  it('should fill out email', () => {
    LoginPage.inputEmail.setValue(userData.userAdmin.email)
    expect(LoginPage.loginBtn.isClickable()).toEqual(false)
  });

  it('should fill out password', () => {
    LoginPage.inputPassword.setValue(userData.userAdmin.password)
    expect(LoginPage.loginBtn.isClickable()).toEqual(true)
  });

  it('should click login btn', () => {
    LoginPage.loginBtn.click()
    browser.waitUntil(()=> ProfilePage.header.getText()===userData.userAdmin.headerAdmin)
  });

}); //