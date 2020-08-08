import BasePage from './Base.page';
import LoginPage from './login.page.js';
import user from '../testData/user';
import TopMenuPage from './topMenu.page';

class settingsProfilePage extends BasePage {
  get firstNameIFTitle() {
    return $('[title="First Name"]');
  }

  get firstNameIF() {
    return $('#editProfile_firstName');
  }

  get lastNameIFTitle() {
    return $('[title="Last Name"]');
  }

  get lastNameIF() {
    return $('#editProfile_lastName');
  }

  get phoneIFTitle() {
    return $('[title="Phone"]');
  }

  get phoneIF() {
    return $('#editProfile_phone');
  }

  get aboutIFTitle() {
    return $('[title="About"]');
  }

  get aboutFieldRIF() {
    return $('#editProfile_about');
  }

  get myGoalsIFTitle() {
    return $('[title="My goals"]');
  }

  get myGoalsRIF() {
    return $('#editProfile_goals');
  }

  get countryFieldDDBTitle() {
    return $('[title="Country"]');
  }

  get countryFieldDDB() {
    return $$('.ant-select-selection-item')[0];
  }

  get englishLevelDDBTitle() {
    return $('[title="English level"]');
  }

  get englishLevelDDB() {
    return $$('.ant-select-selection-item')[1];
  }

  get tShirtSizeDDBTitle() {
    return $('[title="T-Shirt size"]');
  }

  get tShirtSizeDDB() {
    return $$('.ant-select-selection-item')[2];
  }

  get saveBTN() {
    return $('.ant-btn.ant-btn-primary');
  }

  changeDataAtProfile(firstName, lastName) {
    this.firstNameIF.setValue(firstName);
    this.lastNameIF.setValue(lastName);
    this.saveBTN.click();
  }
}
export default new settingsProfilePage();
