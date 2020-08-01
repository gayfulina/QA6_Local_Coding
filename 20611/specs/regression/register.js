import RegisterPage from '../../../pageObjects/register.page';
import { registration, user } from '../testData/users';
import RegisterPageStep2 from '../../../pageObjects/registerStep2.page';
import Profile from '../../../pageObjects/profile.page';

describe('New user registration page', () => {
  before(() => {
    RegisterPage.open();
  });
    it('Check if the title of the page is Local Coding', () => {
      expect(browser.getTitle()).to.equal(registration.title);
    });

    it('Check if the main text on the page is Create an account', () => {
      expect(RegisterPage.headerRegister.getText()).to.equal(registration.header);
    });

    it('Check if the First Name textbox has a placeholder text First Name ', function () {
      expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal(registration.firstName);
    });

    it('Check if the Last Name textbox has a placeholder text Last Name ', function () {
      expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal(registration.lastName);
    });

    it('Check if the Email textbox has a placeholder text Email ', function () {
      expect(RegisterPage.email.getAttribute('placeholder')).to.equal(registration.email);
    });

    it('Check if the Password textbox has a placeholder text Password ', function () {
      expect(RegisterPage.password.getAttribute('placeholder')).to.equal(registration.password);
    });

    it('Check if error message appears when email has incorrect format ', function() {
      RegisterPage.email.setValue(user.incorrectEmail);
      expect(RegisterPage.errorIncorrectEmail).to.exist;
    });

    it('Check if Register button is disabled until correct input is provided ', function() {
      expect(RegisterPage.registerBtn.isClickable()).to.equal(false);
    });

});
