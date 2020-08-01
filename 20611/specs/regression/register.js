import RegisterPage from '../../../pageObjects/register.page';
import HomePage from '../../../pageObjects/home.page';
import { registration, user } from '../testData/users';
import RegisterPageStep2 from '../../../pageObjects/registerStep2.page';
import Profile from '../../../pageObjects/profile.page';

describe('New user registration page', () => {
  before(() => {
    HomePage.open();
  });
  it('TC-001 Register link on Home Page, should take user to the Register page', function() {
    HomePage.registerLink.click();
    expect(RegisterPage.email).to.exist;
  });
  // it('TC-002 Check if the title of the page is Local Coding', () => {
  //   expect(browser.getTitle()).to.equal(registration.title);
  // });
  //
  // it('TC-003 Check if the main text on the page is Create an account', () => {
  //   expect(RegisterPage.headerRegister.getText()).to.equal(registration.header);
  // });
  //
  // it('TC-004 Check if the First Name textbox has a placeholder text First Name ', function () {
  //   expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal(registration.firstName);
  // });
  //
  // it('TC-005 Check if the Last Name textbox has a placeholder text Last Name ', function () {
  //   expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal(registration.lastName);
  // });
  //
  // it('TC-006 Check if the Email textbox has a placeholder text Email ', function () {
  //   expect(RegisterPage.email.getAttribute('placeholder')).to.equal(registration.email);
  // });
  //
  // it('TC-007 Check if the Password textbox has a placeholder text Password ', function () {
  //   expect(RegisterPage.password.getAttribute('placeholder')).to.equal(registration.password);
  // });
  //
  // it('TC-011 Check if error message appears when email has incorrect format ', function() {
  //   RegisterPage.email.setValue(user.incorrectEmail);
  //   expect(RegisterPage.errorIncorrectEmail).to.exist;
  // });
  //
  // it('TC-009 Check if Register button is disabled until correct input is provided ', function() {
  //   expect(RegisterPage.registerBtn.isClickable()).to.equal(false);
  // });
  //
  // it('Check if user is able to move to Register Step 2 page', function () {
  //   RegisterPage.registerUser(user);
  //   expect(RegisterPageStep2.headerRegisterStep2.getText()).eq(
  //     `Dear ${user.firstName} ${user.lastName}!\nPlease complete these fields`,
  //   );
  // });
  // it('Check if user is able to complete the registration process', function () {
  //   RegisterPageStep2.registerUserStep2(user);
  //   expect(Profile.getLoginConfirmation()).eq(`${user.firstName} ${user.lastName}`);
  // });
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
