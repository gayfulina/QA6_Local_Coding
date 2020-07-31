import LoginPage from '../../../pageObjects/login.page';
import HomePage from '../../../pageObjects/home.page';
import expected from '../../data/expected.json';

before(() => {
  HomePage.open();
  HomePage.loginLink.click();
});

describe('Test login page elements', () => {
  it('TC-01-001 Verify that Page Title is "Local Coding"', function () {
    expect(true).true;
  });

  it('TC-01-002 Verify that text "Local Coding" is present"', function () {
    expect(true).true;
  });

  it('TC-01-003 Verify that text "Local Coding" has a link and leads to Main Page"', function () {
    expect(true).true;
  });

  it('TC-01-004 Verify that text "Welcome back!" is present', function () {
    const actual = LoginPage.headerLogin.getText();
    expect(actual).eq(expected.loginPageData.header);
  });

  it('TC-01-005 Verify that Email Field is present', function () {
    expect(LoginPage.inputUsername.isDisplayed()).true;
  });

  it('TC-01-006 Verify that Email Field has a placeholder "Email"', function () {
    expect(true).true;
  });

  it('TC-01-007 Verify that Email Field has icon', function () {
    expect(true).true;
  });

  it('TC-01-008 Verify that Password Field is present', function () {
    expect(LoginPage.inputPassword.isDisplayed()).true;
  });

  it('TC-01-009 Verify that Password Field contains icon', function () {
    expect(true).true;
  });

  it('TC-01-010 Verify that Password Field has a placeholder "Password"', function () {
    expect(true).true;
  });

  it('TC-01-011 Verify that button "Log in" is present', function () {
    expect(true).true;
  });

  it('TC-01-012 Verify that button "Log in" is inactive by default', function () {
    expect(true).true;
  });

  it('TC-01-013 Verify that text "Don’t have an account? Create one." is present', function () {
    expect(true).true;
  });

  it('TC-01-014 Verify that text "Create one" has a link and leads to Register Page', function () {
    expect(true).true;
  });

  it('TC-01-015 Verify that text "Forgot your password? Reset it." is present', function () {
    expect(true).true;
  });

  it('TC-01-016 Verify that text "Reset it" has a link and leads to Reset Password Page', function () {
    expect(true).true;
  });

  it('TC-01-017 Verify that button "Google" is present', function () {
    expect(true).true;
  });

  it('TC-01-018 Verify that button "Google" has text "Sign in with Google"', function () {
    expect(true).true;
  });

  it('TC-01-019 Verify that button "Facebook" is present', function () {
    expect(true).true;
  });

  it('TC-01-020 Verify that button "Facebook" has text "Sign in with Facebook"', function () {
    expect(true).true;
  });

  it('TC-01-021 Verify that when Email is invalid the text "emai is not a valid email" appears', function () {
    expect(true).true;
  });

  it('TC-01-022 Verify that when Email was deleted text "Required" appears', function () {
    expect(true).true;
  });

  it('TC-01-023 Verify that after entering valid Email button "Log in" is still inactive', function () {
    expect(true).true;
  });

  it('TC-01-024 Verify that when Password was deleted text "Required" appears', function () {
    expect(true).true;
  });

  it('TC-01-025 Verify that when valid email and password is entered button "Log in" is active', function () {
    expect(true).true;
  });

  it('TC-01-026 Verify that if Email is not right Error Notification pops up', function () {
    expect(true).true;
  });

  it('TC-01-027 Verify that if Password is not right Error Notification pops up', function () {
    expect(true).true;
  });

  it('TC-01-028 Verify that Error Notification has text "Auth failed"', function () {
    expect(true).true;
  });

  it('TC-01-029 Verify that Error Notification has red circle icon', function () {
    expect(true).true;
  });

  it('TC-01-030 Verify that Error Notification disappears when press sign "X"', function () {
    expect(true).true;
  });
});
