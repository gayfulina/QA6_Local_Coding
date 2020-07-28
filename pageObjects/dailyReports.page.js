import BasePage from './Base.page';
import profileData from '../20601/data/profile.data'; // delete after general data generated
import { textProfile } from '../20601/data/profile.data';

class DailyReportsPage extends BasePage {
  get createDayReportBtn() {
    return $('.mb-1rem');
  }

  get iUnderstoodEverythingCheckbox() {
    return $('[value="understood_everything"]');
  }

  get helpedClassMatesCheckbox() {
    return $('[value="help_classmates"]');
  }

  get watchedLecturesCheckbox() {
    return $('[value="watch_lessons"]');
  }

  get inputMoral() {
    return $('#morale');
  }

  get selectItemByContentMoral() {
    return $$('.ant-select-item.ant-select-item-option');
  }

  get inputHours() {
    return $('#hours');
  }

  get howWasYourDayInput() {
    return $('#description');
  }

  get submitBtn() {
    return $('[type="submit"]');
  }

  get dailyReportsHeader() {
    return $('h3');
  }

  get lastDailyReportText() {
    return $('.ant-row.mb-4');
  }
  // openProfilePageAdmin() {
  //   super.open(`/profile/${user.admin.id}`);
  // }

  createDayReport() {
    this.createDayReportBtn.click();
    this.iUnderstoodEverythingCheckbox.click();
    this.helpedClassMatesCheckbox.click();
    this.watchedLecturesCheckbox.click();
    this.inputMoral.click();
    this.selectItemByContentMoral[5].click(); // will generate method after 8 hours of sleep
    this.inputHours.click();
    this.selectItemByContentMoral[15].click();// will be improve after 8 hours of sleep
    this.howWasYourDayInput.setValue(textProfile.howWasYourDayText); // change general data  generated
    this.submitBtn.click();
  }
}
export default new DailyReportsPage();
