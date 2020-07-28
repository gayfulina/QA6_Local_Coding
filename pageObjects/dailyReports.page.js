import BasePage from './Base.page';
import ProfilePage from './profile.page';

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
  // get selectItemByContentHours() { return $$('.ant-select-item.ant-select-item-option') }
  get howWasYourDayInput() {
    return $('#description');
  }
  get submitBtn() {
    return $('[type="submit"]');
  }
  get daylyReportsHeader() {
    return $('h3');
  }
  openProfilePage() {
    super.open('/profile/5f150395c2cd3800ef95def7');
  }

  createDayReport() {
    this.createDayReportBtn.click();
    this.iUnderstoodEverythingCheckbox.click();
    this.helpedClassMatesCheckbox.click();
    this.watchedLecturesCheckbox.click();
    this.inputMoral.click();
    this.selectItemByContentMoral[5].click();
    //this.inputHours.scrollIntoView();
    this.inputHours.click();
    browser.pause(2000);
    this.selectItemByContentMoral[1].click();
    this.howWasYourDayInput.setValue(textProfile.howWasYourDayText);
    this.submitBtn.click();
  }
}
export default new DailyReportsPage();
