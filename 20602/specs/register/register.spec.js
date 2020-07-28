//import RegisterPage from "../../pages/register.page";
import HomePage from "../../../pageObjects/home.page"
import expected from '../../data/expected.json';
//import LoginPage from '../../pages/login.page';
import RegisterPage from "../../../pageObjects/register.page";
import user from '../../data/users';

before(() => {
  HomePage.open();
  HomePage.registerLink.click();
});

describe('TEST REGISTER PAGE ELEMENTS', () => {

  it('should verify home page link is working', function() {
    RegisterPage.homePageLink.click();
    expect(HomePage.header.getText()).eq(expected.homePageData.header);
  });

  it('should verify header is present', () => {
    RegisterPage.open()
    expect(RegisterPage.header.isDisplayed()).true;
  });

  it('should verify header text', () => {
    expect(RegisterPage.header.getText()).eq(expected.registerPageData.header);
  });

  it('should verify firstNameInput is present', function () {
    expect(RegisterPage.firstNameInput.isDisplayed()).true;
  });

  it('should verify lastNameInput is present', function () {
    expect(RegisterPage.lastNameInput.isDisplayed()).true;
  });

  it('should verify emailInput is present', function () {
    expect(RegisterPage.email.isDisplayed()).true;
  });

  it('should verify passwordInput is present', function () {
    expect(RegisterPage.password.isDisplayed()).true;
  });

  it('should verify eye icon is present', function() {
    expect(RegisterPage.eyeIconClosed.isDisplayed()).true;
  });

  it('should verify submitBtn is disabled by default', function () {
    expect(RegisterPage.registerBtn.isEnabled()).false;
  });

  it('should verify agreementCheckbox is disabled by default', function () {
    expect(RegisterPage.agreementCheckBox.isSelected()).false;
  });

  it('should verify agreementLabel text', function () {
    expect(RegisterPage.agreementLabel.getText()).eq(expected.registerPageData.agreementLabel);
  });

  it('should verify agreementDrawer pops-up when agreementBtn is clicked', function () {
    RegisterPage.termsAndAgreementsLink.click();
    expect(RegisterPage.agreementDrawer.isDisplayed()).true;
  });

  xit('should verify agreementDrawer disappears when drawerCloseBtn is clicked', function () {
    browser.pause(3000);
    RegisterPage.drawerCloseBtn.click();
    browser.waitUntil(() => RegisterPage.agreementDrawer.isDisplayed() === false);
  });

  it('should verify text of prompt label', function() {
    browser.refresh();
    expect(RegisterPage.promptLabel.getText()).eq(expected.registerPageData.promptLabel);
  });

  it('check that registration works', function() {
    browser.refresh();
    RegisterPage.registerUser(user);
  })

  xit('should verify login link is working', function() {
    RegisterPage.loginLink.click();
    expect(LoginPage.header.getText()).eq(expected.loginPageData.header);
  });

});