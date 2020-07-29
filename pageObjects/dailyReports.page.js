import BasePage from './Base.page';
import profileData from '../20601/data/profile.data'; // delete after general data generated
import { textProfile } from '../20601/data/profile.data';
import randomSelectorElements from '../20601/data/dairy.data';

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

  get selectContentMoraleAndHours() {
    return $$('.ant-select-item.ant-select-item-option'); //one selector for both fields
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
    this.selectContentMoraleAndHours[randomSelectorElements.morale].click();
    this.inputHours.click();
    this.selectContentMoraleAndHours[randomSelectorElements.hours].click();
    this.howWasYourDayInput.setValue(textProfile.howWasYourDayText); // change general data  generated
    this.submitBtn.click();
  }
}
export default new DailyReportsPage();
