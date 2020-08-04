import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';

describe('LOGIN PAGE FIELDS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-005 verify that header of the Login Page is "Welcome back!"', function() {
    expect(LoginPage.headerLogin.getText()).contains(expected.pagesHeaders.LoginHeader);
  });

  it('TC-006 verify that placeholder of Email Field is "Email!"', function() {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(expected.pagesHeaders.emailPlaceholder);
  });

  it('TC-007 verify that placeholder of Password Field is "Password!"', function() {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(expected.pagesHeaders.passwordPlaceholder);
  });
  


});
