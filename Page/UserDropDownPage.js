import BasePage from "./BasePage";

class UserDropDownPage extends BasePage {

  get userName() {
    return browser.$('//div[@class="ml-auto"]/a[2]');
  }

  get profile() {
    return browser.$('//a[text()="Profile"]');
  }

  get settings() {
    return browser.$('//a[text()="Settings"]');
  }

  get logout() {
    return browser.$('//li[text()="Logout"]');
  }

  goToSettings() {
    this.userName.click();
    this.settings.click();
  }

  goToProfile() {
    this.userName.click();
    this.profile.click();
  }

}

export default new  UserDropDownPage();