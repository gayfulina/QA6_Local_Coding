import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import { textHome } from '../../data/home.data';
import { textStep1, textLogin } from '../../data/registerAndLoginData';


describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('verify that Register link open Register Page', function () {
    HomePage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(textStep1.header);
  });

  it('verify that Login Link open Login Page', function () {
    HomePage.loginLink.click();
    expect(LoginPage.header.getText()).contains(textLogin.header);
  });

});
