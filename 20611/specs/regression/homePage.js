import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import { header, text } from '../testData/expected.json';
import LoginPage from '../../../pageObjects/login.page';

describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('Check: Register link open Register Page', function () {
    HomePage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(header.headerRegister);
  });

  it('Check: Login Link open Login Page', function () {
    HomePage.loginLink.click();
    expect(LoginPage.header.getText()).contains(text.headerText);
  });
});
