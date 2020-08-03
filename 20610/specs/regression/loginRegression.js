import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import expected from '../../data/expected.json';
import RegisterPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/reset.password';

before(() => {
  LoginPage.open();
});


describe('Login Regression - All elements are present', () => {

  it('LR - 001 h1 should be correct', () => {
    expect(LoginPage.headerLogin.getText()).eq(expected.loginPageHeader.h1);
  });

  it('LR - 002 siteName should be correct', () => {
     expect(LoginPage.siteName.getText()).eq(expected.loginPageHeader.siteName);
    });

  it('LR - 003 Should have Email Input Field present on the page', () => {
     expect(LoginPage.inputUsername.isDisplayed()).true;
    });

  it('LR - 004 Should have Password Input Field present on the page', () => {
     expect(LoginPage.inputPassword.isDisplayed()).true;
    });

  it('LR - 005 Should have Log in Btn present on the page', () => {
     expect(LoginPage.loginBtn.isDisplayed()).true;
    });

  it('LR - 006 Should "Create one" Link be clickable', () => {
     LoginPage.registerLink.click();
     expect(RegisterPage.headerRegister.getText()).eq(expected.newUser.h1);
     RegisterPage.loginLink.click();
    });

  it('LR - 007 Should "Reset it" Link be clickable', () => {
    LoginPage.resetLink.click();
    expect(ResetPasswordPage.resetHeader.getText()).eq(expected.resetPassword.h1);
    ResetPasswordPage.loginLink.click();
   });

});

