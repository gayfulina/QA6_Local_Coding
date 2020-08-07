import RegisterPage from '../../../pageObjects/register.page';
import { negativeRegisterStep1 } from '../../testData/register';
import { newUser } from '../../testData/register';
import {WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';
import user from '../../../testData/user';
import { errorMessagesRegistration } from '../../testResult/errorMessages';

describe('REGISTER PAGE STEP-1 NEGATIVE', function () {
  beforeEach(() => {
    RegisterPage.open();
  });

  it('TC-118 should verify that user can not register with invalid First Name', function () {
    for (let i = 0; i < negativeRegisterStep1.invalidName.length; i++) {
      browser.refresh();
      RegisterPage.firstNameInput.setValue(negativeRegisterStep1.invalidName[i]);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      RegisterPage.registerBtn.click();
      RegisterPage.errorMessage.waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
      expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.userNotCreatedError);
    }
  });

  it('TC-119 should verify that user can not register with invalid Last Name', function () {
    for (let i = 0; i < negativeRegisterStep1.invalidName.length; i++) {
      browser.refresh();
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(negativeRegisterStep1.invalidName[i]);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      RegisterPage.registerBtn.click();
      RegisterPage.errorMessage.waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
      expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.userNotCreatedError);
    }
  });

  it('TC-120 should verify that user can not register with invalid Email', function () {
    for (let i = 0; i < negativeRegisterStep1.invalidEmail1.length; i++) {
      browser.refresh();
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(negativeRegisterStep1.invalidEmail1[i]);
      RegisterPage.inputFieldErrorMessages[0].waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
      expect(RegisterPage.inputFieldErrorMessages[0].getText()).eq(errorMessagesRegistration.invalidEmailError);
    }
  });

  it('TC-121 should verify that user can not register with already existing email', function () {
    RegisterPage.firstNameInput.setValue(newUser.firstName);
    RegisterPage.lastNameInput.setValue(newUser.lastName);
    RegisterPage.email.setValue(user.new.email);
    RegisterPage.password.setValue(newUser.password);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    RegisterPage.errorMessage.waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.emailExistsError);
  });

  it('TC-122 should verify that user can not register with invalid password', function () {
    RegisterPage.firstNameInput.setValue(newUser.firstName);
    RegisterPage.lastNameInput.setValue(newUser.lastName);
    RegisterPage.email.setValue(newUser.email);
    RegisterPage.password.setValue(negativeRegisterStep1.invalidPassword);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    RegisterPage.errorMessage.waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.wrongPasswordError);
  });

  it('TC-123 should verify that "Required" appears after First Name has been cleared', function () {
    RegisterPage.firstNameInput.setValue(negativeRegisterStep1.oneLetter);
    browser.keys('Back space');
    RegisterPage.inputFieldErrorMessages[0].waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
  });

  it('TC-124 should verify that "Required" appears after Last Name has been cleared', function () {
    RegisterPage.lastNameInput.setValue(negativeRegisterStep1.oneLetter);
    browser.keys('Back space');
    RegisterPage.inputFieldErrorMessages[0].waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
  });

  it('TC-125 should verify that "Required" appears after Email has been cleared', function () {
    RegisterPage.email.setValue(negativeRegisterStep1.oneLetter);
    browser.keys('Back space');
    RegisterPage.inputFieldErrorMessages[0].waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
  });

  it('TC-126 should verify that "Required" appears after password has been cleared', function () {
    RegisterPage.password.setValue(negativeRegisterStep1.oneLetter);
    browser.keys('Back space');
    RegisterPage.inputFieldErrorMessages[0].waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
  });
});
