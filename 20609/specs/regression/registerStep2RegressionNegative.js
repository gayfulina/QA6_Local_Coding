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

  it('should check that the correct error message "This entry must only contain numbers" is displayed when symbols are entered into the Phone field', () => {
    browser.refresh()
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.symbolsInvalidPhoneNumber);
    browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].getText() === errorMessagesSRegisterStep2Page.symbolPhoneNumberErrorMessage );
  });

});