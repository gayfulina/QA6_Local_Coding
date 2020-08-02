import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/reset.password';
import HomePage from '../../../pageObjects/home.page';
import expected from '../../data/expected.json';


describe('TEST LOGIN PAGE HEADER', () => {
  before(() => {
  LoginPage.open();
});

  it('TC-01-001 Verify that Page Title is "Local Coding"', function () {
    expect(browser.getTitle()).eq('Local Coding');
  });

  it('TC-01-002 Verify that text "Local Coding" is present"', function () {
    expect(LoginPage.homePageLink.getText()).eq('Local Coding');
  });

  it('TC-01-003 Verify that text "Local Coding" has a link and leads to Main Page"', function () {
    expect(LoginPage.homePageLink.isClickable()).true;
    LoginPage.homePageLink.click();
    expect(HomePage.header.getText()).eq('Adaptive learning platform');
  });

  it('TC-01-004 Verify that text "Welcome back!" is present', function () {
    LoginPage.open();
    expect(LoginPage.headerLogin.getText()).eq(expected.loginPageData.header);
  });
});


describe('TEST LOGIN PAGE FIELDS', () => {

  it('TC-01-005 Verify that Email Field is present', function () {
    expect(LoginPage.inputUsername.isDisplayed()).true;
  });

  it('TC-01-006 Verify that Email Field has a placeholder "Email"', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq('Email');
  });

  it('TC-01-007 Verify that Email Field has icon', function () {
    expect(LoginPage.mailIcon.isDisplayed()).true;
  });

  it('TC-01-008 Verify that Password Field is present', function () {
    expect(LoginPage.inputPassword.isDisplayed()).true;
  });

  it('TC-01-009 Verify that Password Field contains icon', function () {
    expect(LoginPage.lockIcon.isDisplayed()).true;
  });

  it('TC-01-010 Verify that Password Field has a placeholder "Password"', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq('Password');
  });

  it('TC-01-011 Verify that button "Log in" is present', function () {
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-01-012 Verify that button "Log in" is inactive by default', function () {
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-01-013 Verify that text "Don’t have an account? Create one." is present', function () {
    expect(LoginPage.txtCreateOne.getText()).eq('Don’t have an account? Create one.');
  });

  it('TC-01-014 Verify that text "Create one" has a link and leads to Register Page', function () {
    expect(LoginPage.registerLink.isClickable()).true;
    LoginPage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq('Create an account');
  });

  it('TC-01-015 Verify that text "Forgot your password? Reset it." is present', function () {
    LoginPage.open();
    expect(LoginPage.txtResetIt.getText()).eq('Forgot your password? Reset it.');
  });

  it('TC-01-016 Verify that text "Reset it" has a link and leads to Reset Password Page', function () {
    expect(LoginPage.resetLink.isClickable()).true;
    LoginPage.resetLink.click();
    expect(ResetPasswordPage.header.getText()).eq('Reset password');
  });

});


describe('TEST LOGIN PAGE BUTTONS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-01-017 Verify that button "Google" is present', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
  });

  it('TC-01-018 Verify that button "Google" has text "Sign in with Google"', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq('Sign in with Google');
  });

  it('TC-01-019 Verify that button "Facebook" is present', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
  });

  it('TC-01-020 Verify that button "Facebook" has text "Sign in with Facebook"', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq('Sign in with Facebook');
  });
});


describe('TEST LOGIN PAGE EMAIL, PASSWORD NOTES', () => {

  it('TC-01-021 Verify that when Email is invalid the text "emai is not a valid email" appears', function () {
    LoginPage.inputUsername.setValue('asd');
    expect(LoginPage.txtEmailNotValid.getText()).eq("'email' is not a valid email");
  });

  it('TC-01-022 Verify that when Email was deleted text "Required" appears', function () {
    LoginPage.inputUsername.clearValue();
    expect(LoginPage.txtEmailNotValid.getText()).eq('Required');
  });

  it('TC-01-023 Verify that after entering valid Email button "Log in" is still inactive', function () {
    LoginPage.open();
    LoginPage.inputUsername.setValue('abc@gmail.com');
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-01-024 Verify that when Password was deleted text "Required" appears', function () {
    LoginPage.inputPassword.setValue('1234');
    browser.pause(1000);
    LoginPage.inputPassword.clearValue();
    browser.pause(1000);
    expect(LoginPage.txtEmailNotValid.getText()).eq('Required');
  });

  it('TC-01-025 Verify that when valid email and password is entered button "Log in" is active', function () {
    LoginPage.open();
    LoginPage.inputUsername.setValue('abc@gmail.com');
    LoginPage.inputPassword.setValue('1234')
    expect(LoginPage.loginBtn.isClickable()).true;
  });

});


describe('OTHERS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-01-026 Verify that if Email is not right Error Notification pops up', function () {
    LoginPage.inputUsername.setValue('new@qa6.us');
    LoginPage.inputPassword.setValue('1234')
    LoginPage.loginBtn.click();
    browser.pause(1000)
    expect(LoginPage.errorMessage.isDisplayed()).true;
  });

  it('TC-01-027 Verify that if Password is not right Error Notification pops up', function () {
    LoginPage.open();
    LoginPage.inputUsername.setValue('new@qa66.us');
    LoginPage.inputPassword.setValue('newnew')
    LoginPage.loginBtn.click();
    browser.pause(1000)
    expect(LoginPage.errorMessage.isDisplayed()).true;
  });

  it('TC-01-028 Verify that Error Notification has text "Auth failed"', function () {
    expect(LoginPage.errorMessage.getText()).eq('Auth failed');
  });

  it('TC-01-029 Verify that Error Notification has red circle icon', function () {
    expect(LoginPage.errorMessageRedCircle.isDisplayed()).true;
  });

  it('TC-01-030 Verify that Error Notification disappears when press sign "X"', function () {
    LoginPage.errorMessageCloseBtn.click();
    browser.pause(1000);
    expect(LoginPage.errorMessage.isDisplayed()).false;
  });
});



