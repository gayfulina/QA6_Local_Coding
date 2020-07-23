const LoginPage = require('../../pageObjects/login.page');
const SecurePage = require('../../pageObjects/secure.page');

describe('LOGIN', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');

        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

