import LoginPage from '../../pageObjects/login.page';
import SecurePage from '../../pageObjects/secure.page';

describe('LOGIN', () => {
  it('should login with valid credentials', () => {
    LoginPage.open();

    LoginPage.login('tomsmith', 'SuperSecretPassword!');

    expect(SecurePage.flashAlert.isDisplayed()).true;
    expect(SecurePage.flashAlert.getText()).eq('You logged into a secure area!');
  });
});
