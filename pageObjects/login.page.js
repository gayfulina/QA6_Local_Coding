/**
 * sub page containing specific selectors and methods for a specific page
 */
import BasePage from './Base.page';

class LoginPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('#normal_login_email');
  }

  get inputPassword() {
    return $('#normal_login_password');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('user/login');
  }
}

export default new LoginPage();
