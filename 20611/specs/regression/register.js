import RegisterPage from '../../../pageObjects/register.page';

import{registration,user} from '../testData/users';



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

it('Check if the First Name textbox has a placeholder text First Name ', function() {
  expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal(registration.firstName);

});

it('Check if the Last Name textbox has a placeholder text Last Name ', function() {
  expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal(registration.lastName);

});

it('Check if the Email textbox has a placeholder text Email ', function() {
  expect(RegisterPage.email.getAttribute('placeholder')).to.equal(registration.email);

});

it('Check if the Password textbox has a placeholder text Password ', function() {
  expect(RegisterPage.password.getAttribute('placeholder')).to.equal(registration.password);

});

it('Fill in FirstName' , function(){
  RegisterPage.firstNameInput.setValue(user.firstName);
  browser.pause(1000);

});

  it('Fill in Last Name' , function() {
    RegisterPage.lastNameInput.setValue(user.lastName);
    browser.pause(1000);
  });

  it('Fill in email' , function() {
    RegisterPage.email.setValue(user.email);
    browser.pause(1000);
  });

  it('Fill in password' , function() {
    RegisterPage.password.setValue(user.password);
    browser.pause(2000);
  });


  it('click on Terms & Agreement' , function() {
    RegisterPage.TandAlink.click();

  });

  it('close Terms & Agreement' , function() {
    RegisterPage.TandAlinkClose.click();

  });

  it('click on Agreement' , function() {
    RegisterPage.agreement.click();

  });

  it('click on Register Button' , function() {
    RegisterPage.registerBtn.click();

  });








});