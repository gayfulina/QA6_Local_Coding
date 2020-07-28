import LoginPage from '../../../pageObjects/login.page';
const login = require('../testData/expected.json').login;
const user = require('../testData/expected.json').user;

describe('Login page tests', () => {
  before(() => {
    LoginPage.open();
  });

  it('check the header', function () {
    expect(LoginPage.headerLogin.getText()).eq(login.header);
  });
});
