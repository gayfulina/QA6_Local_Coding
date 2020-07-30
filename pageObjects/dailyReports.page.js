import BasePage from './Base.page';
import randomData from '../20601/data/dairy.data';

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

  createRandomDayReport() {
    this.createDayReportBtn.click();
    this.iUnderstoodEverythingCheckbox.click();
    this.helpedClassMatesCheckbox.click();
    this.watchedLecturesCheckbox.click();
    this.inputMoral.click();
    this.selectContentMoraleAndHours[randomData.moraleSelectorIndex].click();
    this.inputHours.click();
    this.selectContentMoraleAndHours[randomData.hoursSelectorIndex].click();
    this.howWasYourDayInput.setValue(randomData.text);
    this.submitBtn.click();
  }
}
export default new DailyReportsPage();
