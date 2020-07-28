import BasePage from './BasePage';
import userData from './../Data/userData';
class LoginPage extends BasePage{

  get inputEmail() { return $('#normal_login_email')}
  get inputPassword() { return $('#normal_login_password')}
  get loginBtn() { return $('[type="submit"]')}
  get header() { return $('h1')}
  get linkGoogle() { return $('[data-provider-id="google.com"]')}
  get linkFacebook() { return browser.$('//span[text()="Sign in with Facebook"]')}
  get linkResetPassword() { return browser.$('//a[text()="Reset it"]')}
  get linkCreateNewAccount() { return browser.$('//a[text()="Create one"]')}
  get linkHomePage() { return $('.site-name')}

  open(path) {
    super.open('user/login');
  }

  login(email, password) {
    this.open();
    this.inputEmail.setValue(email);
    this.inputPassword.setValue(password);
    this.loginBtn.click();
  }
}

export default new LoginPage();