import RegisterPage from '../../../pageObjects/register.page';
import user from '../../../testData/user';
import expected from '../../data/expected.json';
import { newUser } from '../../data/fakeData';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { registerPageTestResult } from '../../../20605/testResult/register';
import ProfilePage from '../../../pageObjects/profile.page';

before(() => {
  RegisterPage.open();
  RegisterPage.firstNameInput.setValue(newUser.firstName);
  RegisterPage.lastNameInput.setValue(newUser.lastName);
  RegisterPage.email.setValue(newUser.email);
  RegisterPage.password.setValue(newUser.password);
  RegisterPage.termsAndAgreements();
  RegisterPage.registerBtn.click();
  browser.maximizeWindow();
});

describe('USER REGISTER PAGE STEP 2', function () {
  it('should header "Dear ... ...!\n' + 'Please complete these fields" be displayed', function () {
    expect(RegisterStep2Page.headerRegisterStep2.isDisplayed());
  });

  it('header has correct text "Dear ... ...!\n' + 'Please complete these fields" ', function () {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
      // `Dear ${newUser.firstName} ${newUser.lastName}!\nPlease complete these fields`,
      expected.newUserStep2.h5firstPart +`${newUser.firstName} ${newUser.lastName}!` + expected.newUserStep2.h5secondPart);
  });

  it('Country Label is displayed and has correct text "Country"', function () {
    expect(RegisterStep2Page.countryLabel.isDisplayed());
    expect(RegisterStep2Page.countryLabel.getText()).eq(expected.newUserStep2.countryLable);
  });

  it('Country field is displayed', function () {
    expect(RegisterStep2Page.openDropdown.isDisplayed());
  });

  it('Country Dropdown is clickable ', function () {
    expect(RegisterStep2Page.openDropdown.isClickable());
  });

  it('country in Country Dropdown is United States by default', function () {
    expect(RegisterStep2Page.openDropdown.getText()).eq(expected.newUserStep2.defaultCountry);
  });

  it('Phone Label is displayed and has correct text "Phone"', function () {
    expect(RegisterStep2Page.phoneLabel.isDisplayed());
    expect(RegisterStep2Page.phoneLabel.getText()).eq(expected.newUserStep2.phoneLable);
  });

  it('Phone input field is displayed', function () {
    expect(RegisterStep2Page.phoneNumber.isDisplayed());
  });

  it('Phone number prefix is displayed in the phone input field', function () {
    expect(RegisterStep2Page.phoneNumberPrefix.isDisplayed());
  });

  it('Phone number prefix is +1 if country= United States', function () {
    expect(RegisterStep2Page.countryCurrent.getText()).eq(expected.newUserStep2.defaultCountry);
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq('+1');
  });

  it('Phone input field placeholder is "phone number"', function () {
    expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(expected.newUserStep2.phonePlaceholder);
  });

  it('Correct error message appears if phone input field value = 9 digits ', function () {
    RegisterStep2Page.phoneNumber.setValue(newUser.invalidPhoneNumber9Digit);
    browser.waitUntil(() => RegisterStep2Page.errorMessages.getText() === expected.newUserStep2.phoneErrMessageNumOfDigits);
  });

  // it('Correct error message appears if phone input field has not a number', function () {
  //   browser.refresh();
  //   RegisterStep2Page.phoneNumber.setValue(newUser.invalidPhoneNumberNaN);
  //   browser.waitUntil(() => RegisterStep2Page.errorMessages.getText() === expected.newUserStep2.phoneErrMessageNaN);
  // });

  it('Submit Btn should be displayed', function () {
    expect(RegisterStep2Page.SubmitBtn.isDisplayed());
  });

  it('Submit Btn has correct text', function () {
    expect(RegisterStep2Page.SubmitBtn.getText()).eq(expected.newUserStep2.submitBtn);
  });

  it('Submit Btn is disable by default (if phone input field is empty)', function () {
    RegisterStep2Page.phoneNumber.clearValue();
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).false;
  });

  it('should be able to chose Netherlands in Country Dropdown ', function () {
    RegisterStep2Page.openDropdown.click();
    $$('.ant-select-item.ant-select-item-option')[3].click();
    browser.pause(500)
    expect(RegisterStep2Page.countryCurrent.getText()).eq('Netherlands');
  });

  it('Phone number prefix is +31 if country is changed for Netherlands', function () {
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq('+31');
  });

  it('Skip link is present', function() {
    expect(RegisterStep2Page.skipBtn.isDisplayed());
  });

  it('Skip link is clickable', function() {
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });

});