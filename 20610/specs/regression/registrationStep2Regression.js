import RegisterPage from '../../../pageObjects/register.page';
import expected from '../../data/expected.json';
import { newUser } from '../../data/fakeData';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
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
    browser.refresh();
    expect(RegisterStep2Page.headerRegisterStep2.isDisplayed());
  });

  it('header has correct text "Dear ... ...!\n' + 'Please complete these fields" ', function () {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
      expected.newUserStep2.h5firstPart + `${newUser.firstName} ${newUser.lastName}!` + expected.newUserStep2.h5secondPart,
    );
  });

  it('Country Label is displayed and has correct text "Country"', function () {
    expect(RegisterStep2Page.countryLabel.isDisplayed());
    expect(RegisterStep2Page.countryLabel.getText()).eq(expected.newUserStep2.countryLabel);
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
    expect(RegisterStep2Page.phoneLabel.getText()).eq(expected.newUserStep2.phoneLabel);
  });

  it('Phone input field is displayed', function () {
    expect(RegisterStep2Page.phoneNumber.isDisplayed());
  });

  it('Phone number prefix is displayed in the phone input field', function () {
    expect(RegisterStep2Page.phoneNumberPrefix.isDisplayed());
  });

  it('Phone number prefix is +1 if country= United States', function () {
    expect(RegisterStep2Page.countryCurrent.getText()).eq(expected.newUserStep2.defaultCountry);
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq(expected.newUserStep2.defaultPrefix);
  });

  it('Phone input field placeholder is "phone number"', function () {
    expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(expected.newUserStep2.phonePlaceholder);
  });

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

  it('Skip link is present', function () {
    expect(RegisterStep2Page.skipBtn.isDisplayed());
  });

  it('Skip link is clickable', function () {
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});
