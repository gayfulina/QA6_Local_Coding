import BasePage from './Base.page';
import { WAIT_TIME_MEDIUM } from '../testData/waitTimes';

class ProfilePage extends BasePage {
  get headerProfile() {
    return $('h1');
  }

  get badgeRole() {
    return $('.ant-badge');
  }

  get dropDownUserMenu() {
    return $('[aria-label="down"]');
  }

  get logoutLink() {
    return $$('.ant-dropdown-menu-item')[3];
  }

  get linkLocal() {
    return $('.ant-row.mt-4 > div > div > span');
  }

  get goalsText() {
    return $('h3');
  }

  get goalsAchievementsLink() {
    return $("//div[contains(text(),'no goals')]");
  }

  get dailyReportsText() {
    return $('h3.mb-0');
  }

  get createDayReportBtn() {
    return $("//span[contains(text(),'Create day report')]");
  }

  get contactUsLink() {
    return $('footer > a:nth-of-type(1)');
  }

  get termsOfServiceLink() {
    return $('footer > a:nth-of-type(2)');
  }

  get privacyPolicy() {
    return $('footer > a:nth-of-type(3)');
  }

  get completedCodewarsKata() {
    return $('h3.mb-0');
  }

  get updateList() {
    return $("//div[@class='ant-row mt-4']//div[5]");
  }

  get createDayReportBtnClose() {
    return $("//button[@class='ant-drawer-close']");
  }

  get settingsLink() {
    return $$('.ant-dropdown-menu-item')[1];
  }

    createDayReport() {
    this.createDayReportBtn.click();
    this.createDayReportBtnClose.waitForClickable({ timeout: WAIT_TIME_MEDIUM });
    this.createDayReportBtnClose.click();
  }

  getLoginConfirmation() {
    return this.headerProfile.getText();
  }

  logout() {
    this.dropDownUserMenu.click();
    this.logoutLink.click();
  }
}

export default new ProfilePage();
