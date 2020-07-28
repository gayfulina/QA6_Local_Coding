import BasePage from "./BasePage";

class SettingsPage extends BasePage {

  get userMenuSettings() {
    return $('.ant-menu');
  }

  get profileSettings() {
    return browser.$('//li[text()="Profile"]');
  }

  get passwordSettings() {
    return browser.$('//li[text()="Password"]');
  }

  get emailSettings() {
    return browser.$('//li[text()="Email"]');
  }

  get linksSettings() {
    return browser.$('//li[text()="Links"]');
  }

  get ShippingAddressSettings() {
    return browser.$('//li[text()="Shipping address"]');
  }

}

export default new SettingsPage();