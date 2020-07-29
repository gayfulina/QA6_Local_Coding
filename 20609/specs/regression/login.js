import LoginPage from '../../../pageObjects/login.page';
import { textLogin } from '../../data/loginData';

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('should have Welcome back header', () => {
    expect(LoginPage.header.getText()).eq(textLogin.headerLogin);
  });

  it('elements field and links is present', () => {
    expect(LoginPage.inputPassword.isDisplayed()).equal(true);
    expect(LoginPage.inputUsername.isDisplayed()).equal(true);
    expect(LoginPage.loginBtn.isDisplayed()).equal(true);
    expect(LoginPage.loginGoogleBtn.isDisplayed()).equal(true);
    expect(LoginPage.loginFacebookBtn.isDisplayed()).equal(true);
    expect(LoginPage.resetLink.isDisplayed()).equal(true);
    expect(LoginPage.registerLink.isDisplayed()).equal(true);
  });

  it('should links be clickable', () => {
    expect(LoginPage.loginGoogleBtn.isClickable()).equal(true);
    expect(LoginPage.registerLink.isClickable()).equal(true);
    expect(LoginPage.resetLink.isClickable()).equal(true);
    expect(LoginPage.loginFacebookBtn.isClickable()).equal(true);
  });
});
