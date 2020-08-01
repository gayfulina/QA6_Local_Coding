import RegisterPage from '../../../pageObjects/register.page';
import { headers } from '../../data/registerData';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { dataRegression } from '../../data/registerData';

describe('USER REGISTER step 1', () => {
  before(() => {
    RegisterPage.open();
  });

  it('should have header ', () => {
    expect(RegisterPage.headerRegister.getText()).eq(headers.headerRegister);
  });

  it('should home link is clickable', () => {
    expect(RegisterPage.homePageLink.isClickable()).true;
  });

  it('should agreement check box is present', () => {
    expect((RegisterPage.agreementLabel).isDisplayed()).true;
  });

  it('should agreement check box is clickable', () => {
    expect((RegisterPage.agreementLabel).isClickable()).true;
  });

  it('should agreement check box have correct text', () => {
    expect((RegisterPage.agreementLabel).getText()).eq(dataRegression.readTerms);
  });

  it('should agreement check box is enabled', () => {
    expect(RegisterPage.agreementCheckBox.isEnabled()).true;
  });

  it('should  register btn is not clickable', () => {
    expect(RegisterPage.registerBtn.isClickable()).false;
  });

  it('should login link is clickable', () => {
    expect(RegisterPage.loginLink.isClickable()).true;
  });

  it('should login link have correct text', () => {
    expect((RegisterPage.promptLabel).getText()).eq(dataRegression.textParagraf);
  });

  it('should  input first  name is present', () => {
    expect(RegisterPage.firstNameInput.isDisplayed()).true;
  });

  it('should  input first  name has correct text"', () => {
    expect(RegisterPage.firstNameInput.getAttribute('placeholder')).eq(dataRegression.firstName);
  });

  it('should  input last  name is present', () => {
    expect(RegisterPage.lastNameInput.isDisplayed()).true;
  });

  it('should  input last  name has correct text"', () => {
    expect(RegisterPage.lastNameInput.getAttribute('placeholder')).eq(dataRegression.lastName);
  });

  it('should  input email is present', () => {
    expect(RegisterPage.email.isDisplayed()).true;
  });

  it('should  input email has  correct text"', () => {
    expect(RegisterPage.email.getAttribute('placeholder')).eq(dataRegression.email);
  });

  it('should  input password is present', () => {
    expect(RegisterPage.password.isDisplayed()).true;
  });

  it('should  input password has correct text"', () => {
    expect(RegisterPage.password.getAttribute('placeholder')).eq(dataRegression.password);
  });

  it('should  hide password icon is present', () => {
    expect(RegisterPage.lockIcon.isDisplayed()).true;
  });

  it('should  hide password icon is clickable"', () => {
    expect(RegisterPage.lockIcon.isClickable()).true;
  });
});

describe('USER REGISTER STEP 2', () => {
  before(() => {
    RegisterStep2Page.open();
  });

  it('should have correct title', () => {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(dataRegression.headerStep2);
  });

  it('should home link is clickable', () => {
    expect(RegisterStep2Page.homePageLink.isClickable()).true;
  });

  it('should home link has correct text', () => {
    expect(RegisterStep2Page.homePageLink.getText()).eq(dataRegression.homeLinkText);
  });

  it('should submit button is not clickable', () => {
    expect(RegisterStep2Page.SubmitBtn.isClickable()).false;
  });

  it('should submit button has correct text', () => {
    expect(RegisterStep2Page.SubmitBtn.getText()).eq(dataRegression.submitText);
  });

  it('should country label present', () => {
    expect(RegisterStep2Page.countryLabel.isDisplayed()).true;
  });

  it('should country label has correct text', () => {
    expect(RegisterStep2Page.countryLabel.getText()).eq(dataRegression.countryText);
  });

  it('should have drop down list countries', () => {
    expect(RegisterStep2Page.openDropdown.isDisplayed()).true;
  });

  it('should have correct country by default', () => {
    expect((RegisterStep2Page.countryCurrent).getAttribute('title')).eq(dataRegression.countryInput);
  });

  it('should phone label present', () => {
    expect(RegisterStep2Page.phoneLabel.isDisplayed()).true;
  });

  it('should phone label has correct text', () => {
    expect(RegisterStep2Page.phoneLabel.getText()).eq(dataRegression.phoneText);
  });

  it('should input field  present', () => {
    expect(RegisterStep2Page.phoneNumber.isDisplayed()).true;
  });

  it('should input field  has correct text', () => {
    expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(dataRegression.phoneInput);
  });

  it('should have prefix number by default', () => {
    expect($('.ant-input-prefix').getText()).eq(dataRegression.phonePrefix);
  });

  it('should skip btn is displayed', () => {
    expect(RegisterStep2Page.skipBtn.isDisplayed()).true;
  });

  it('should skip btn is clickable', () => {
    expect(RegisterStep2Page.skipBtn.isClickable()).true;
  });

  it('should skip btn has correct text', () => {
    expect(RegisterStep2Page.skipBtn.getText()).eq(dataRegression.skipText);
  });
});
