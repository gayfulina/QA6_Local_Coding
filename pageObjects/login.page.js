import BasePage from '../pageObjects/Base.page';
import ProfilePage from '../pageObjects/profile.page';
import RegistrationPage from '../pageObjects/register.page';
import ResetPasswordPage from '../pageObjects/reset.password';

class LoginPage extends BasePage {
  get headerLogin() {
    return $('h1');
  }

  get inputUsername() {
    return $('#normal_login_email');
  }

  get inputPassword() {
    return $('#normal_login_password');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  get loginGoogleBtn() {
    return $$('#firebaseui_containerbutton')[0];
  }

  get loginFacebookBtn() {
    return $$('#firebaseui_containerbutton')[1];
  }

  get registerLink() {
    return $('a[href="/user/register"]');
  }

  get resetLink() {
    return $('a[href="/user/password/reset"]');
  }

  get errorMessageCloseBtn() {
    return $('.ant-notification-notice-close');
  }

  open() {
    return super.open('user/login');
  }

  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.loginBtn.click();
  }

  validLogin(username, password) {
    this.login(username, password);
    return ProfilePage;
  }

  invalidLogin(username, password) {
    this.login(username, password);
    return LoginPage;
  }

  getLogoutConfirmation() {
    return this.headerLogin.getText();
  }

  closeMessage() {
    this.errorMessageCloseBtn.click();
  }

  goToRegisterPage() {
    this.registerLink.click();
    return RegistrationPage;
  }

  goToResetPasswordPage() {
    this.resetLink.click();
    return ResetPasswordPage;
  }
}

export default new LoginPage();
