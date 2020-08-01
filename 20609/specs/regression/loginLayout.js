import LoginPage from '../../../pageObjects/login.page';
import { textLogin } from '../../data/loginData';
import TopMenuPage from '../../../pageObjects/topMenu.page';

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('should have Welcome back header', () => {
    expect(LoginPage.header.getText()).eq(textLogin.headerLogin);
  });

  it('should verify link home page is present', function () {
    expect(TopMenuPage.label.isDisplayed()).eq(true);
  });

  it('should  verify link home page is clickable', function () {
    expect(TopMenuPage.label.isClickable()).eq(true);
  });

  it('should verify link home page has right name', function () {
    expect(TopMenuPage.label.getText()).eq(textLogin.linkLocalCoding);
  });

  it('should verify icon mail is present', function () {
    expect(LoginPage.mailIcon.isDisplayed()).eq(true);
  });

  it('should verify input email field is present', function () {
    expect(LoginPage.inputUsername.isDisplayed()).eq(true);
  });

  it('should verify input email field has right name', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(textLogin.placeholderEmail);
  });

  it('should verify icon lock is present', function () {
    expect(LoginPage.lockIcon.isDisplayed()).eq(true);
  });

  it('should verify input password field is present', function () {
    expect(LoginPage.inputPassword.isDisplayed()).eq(true);
  });

  it('should verify input password field has right name', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(textLogin.placeholderPassword);
  });

  it('should verify login button is present', function () {
    expect(LoginPage.loginBtn.isDisplayed()).eq(true);
  });

  it('should verify login button is non-clickable', function () {
    expect(LoginPage.loginBtn.isClickable()).eq(false);
  });

  it('should verify login button has right name', function () {
    expect(LoginPage.loginBtn.getText()).eq(textLogin.loginBtn);
  });

  it('should verify register link is present', function () {
    expect(LoginPage.registerLink.isDisplayed()).eq(true);
  });

  it('should verify register link is clickable', function () {
    expect(LoginPage.registerLink.isClickable()).eq(true);
  });

  it('should verify register link has right name', function () {
    expect(LoginPage.registerLink.getText()).eq(textLogin.linkCreateAccount);
  });

  it('should verify reset link is present', function () {
    expect(LoginPage.resetLink.isDisplayed()).eq(true);
  });

  it('should verify reset link is clickable', function () {
    expect(LoginPage.resetLink.isClickable()).eq(true);
  });

  it('should verify reset link has right name', function () {
    expect(LoginPage.resetLink.getText()).eq(textLogin.linkResetPassword);
  });

  it('should Google login link is present', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).eq(true);
  });

  it('should Google login link is clickable', function () {
    expect(LoginPage.loginGoogleBtn.isClickable()).eq(true);
  });

  it('should Google login link has right name', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq(textLogin.linkBtnGoogle);
  });

  it('should Facebook login link is present', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).eq(true);
  });

  it('should Facebook login link is clickable', function () {
    expect(LoginPage.loginFacebookBtn.isClickable()).eq(true);
  });

  it('should Facebook login link has right name', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq(textLogin.linkBtnFacebook);
  });
});
