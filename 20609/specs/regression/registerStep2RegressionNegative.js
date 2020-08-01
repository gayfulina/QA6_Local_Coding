import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import RegisterPage from '../../../pageObjects/register.page'
import{userStep2NegativeData} from '../../data/userNegativeData'
import {errorMessagesSRegisterStep2Page} from "../../data/errorMessages";

describe(' USER REGISTER STEP 2 - NEGATIVE', () => {
  describe('', () => {
    RegisterStep2Page.open()
  });

  it('should Submit button be disabled by default', () => {
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).eq(false);
  });

  it('should Phone Number field display an error message when entering incorrect number of digits ', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber)
    browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
  });

  it('should check that is displayed the correct error message when invalid data is entered into the Phone field', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber)
    expect( RegisterPage.inputFieldErrorMessages[0].getText()).not.eq(errorMessagesSRegisterStep2Page.invalidPhoneNumErrorMessage);
  });

  it('should check that the button stays disabled when invalid data is entered into the Phone field', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber)
    RegisterStep2Page.SubmitBtn.click();
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).eq(false)
  });

  it('should check is displayed the correct error message when symbols are entered into the Phone field', () => {
    browser.refresh()
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.symbolsInvalidPhoneNumber);
    expect( RegisterPage.inputFieldErrorMessages[0].getText()).eq(errorMessagesSRegisterStep2Page.symbolPhoneNumberErrorMessage);
  });

});