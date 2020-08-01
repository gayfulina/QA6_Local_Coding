import LoginPage from "../../../pageObjects/login.page";
import {userNegativeData} from "../../data/userNegativeData";
import {admin, student} from "../../../testData/user";

describe ("LOGIN NEGATIVE", () => {
  before( () => {
    LoginPage.open();
  });

  it('TC should enter wrong email', () => {
    LoginPage.login(userNegativeData.emailInvalid, admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC should enter wrong password', () => {
    LoginPage.login(admin.email, userNegativeData.passwordInvalid);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC should enter wrong email and password', () => {
    LoginPage.login(userNegativeData.emailInvalid, userNegativeData.passwordInvalid);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC should enter student email and admin password', () => {
    LoginPage.login(student.email, admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC should enter admin email and student password', () => {
    LoginPage.login(admin.email, student.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC should leave empty password field', () => {
    browser.refresh();
    LoginPage.inputUsername.setValue(admin.email);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

  it('TC should leave empty email field', () => {
    browser.refresh();
    LoginPage.inputPassword.setValue(admin.password);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

});