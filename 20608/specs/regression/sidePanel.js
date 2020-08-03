import { expect } from 'chai';
import SidePanelPage from './../../../pageObjects/sidePanel.page';
import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';
import { IncompleteUser } from '../../data/DataPage';
import ProfilePage from '../../../pageObjects/profile.page'
import BasePage from '../../../pageObjects/Base.page';

describe('SIDE PANEL ELEMENTS', function () {
  before('', function () {
    browser.maximizeWindow();
    LoginPage.open();
    LoginPage.login(IncompleteUser.email, IncompleteUser.password);
  });

  it('should have right title', function () {
    expect(SidePanelPage.drawerTitle.getText()).eq(expected.sidePanel.drawerTitle);
  });

  it('should verify country label', function() {
    expect(SidePanelPage.countryLabel.getText()).eq(expected.sidePanel.countryLabel)
  });

  it('should verify phone label', function() {
    expect(SidePanelPage.phoneLabel.getText()).eq(expected.sidePanel.phoneLabel)
  });

  it('should verify default country placeholder', function() {
    expect(SidePanelPage.defaultCountryPlaceholder.getText()).eq(expected.sidePanel.defaultCountryPlaceholder)
  });
  //
  // it('should verify default phone placeholder', function() {
  //   expect(SidePanelPage.defaultPhonePlaceholder.getText()).eq(expected.sidePanel.defaultPhonePlaceholder)
  // });

  it('should verify default phone prefix', function() {
    expect(SidePanelPage.defaultPhonePrefix.getText()).eq(expected.sidePanel.defaultPhonePrefix)
  });

  it('should verify country dropdown list ', function() {
    expect(SidePanelPage.countryDropdown.isDisplayed()).true;
  });

  it('should verify submit button', function() {
    expect(SidePanelPage.submitBtn.isDisplayed()).true;
  });

  it('should verify submit button disabled', function() {
    expect(SidePanelPage.submitBtn.isClickable()).false;
    //browser.pause(4000)
  });

  it('should submit form', function() {
    SidePanelPage.submitForm();
    expect(ProfilePage.getLoginConfirmation()).eq(IncompleteUser.name)
//    browser.pause(2000);
  });

  it('should move to settings', function() {
    SidePanelPage.moveToSettings();
    SidePanelPage.settingsEditPhone.waitForDisplayed()
    expect(SidePanelPage.settingsEditPhone.isDisplayed()).true;
 //   browser.pause(2000);

  });

  it('should clear phone field and save changes ', function() {
    SidePanelPage.settingsEditPhone.click()
    SidePanelPage.settingsEditPhone.setValue('');
    //browser.refresh();
     expect(SidePanelPage.settingsEditPhone.getValue()).eq('');
    browser.pause(2000);

  });

});
