import RegisterPage from '../../../pageObjects/register.page';
import HomePage from '../../../pageObjects/home.page';
import { registration, user } from '../testData/users';

describe('New user registration page', () => {
  before(() => {
    HomePage.open();
  });

  it('TC-001 Register link on Home Page, should take user to the Register page', function () {
    HomePage.registerLink.click();
    expect(RegisterPage.email).to.exist;
  });
  it('TC-002 Check if the title of the page is Local Coding', () => {
    expect(browser.getTitle()).to.equal(registration.title);
  });

  it('TC-003 Check if the main text on the page is Create an account', () => {
    expect(RegisterPage.headerRegister.getText()).to.equal(registration.header);
  });

  it('TC-004 Check if the First Name textbox has a placeholder text First Name ', function () {
    expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal(registration.firstName);
  });

  it('TC-005 Check if the Last Name textbox has a placeholder text Last Name ', function () {
    expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal(registration.lastName);
  });

  it('TC-006 Check if the Email textbox has a placeholder text Email ', function () {
    expect(RegisterPage.email.getAttribute('placeholder')).to.equal(registration.email);
  });

  it('TC-007 Check if the Password textbox has a placeholder text Password ', function () {
    expect(RegisterPage.password.getAttribute('placeholder')).to.equal(registration.password);
  });

  it('TC-009 Check if Register button is disabled until correct input is provided ', function () {
    expect(RegisterPage.registerBtn.isClickable()).to.equal(false);
  });
});
