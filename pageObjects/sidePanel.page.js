import BasePage from './Base.page';
import { RegisterData } from '../20608/data/DataPage';

class SidePanelPage extends BasePage {
  get countryDropdown() {
    return $('[class="ant-select-selector"]');
  }

  get phoneNumber() {
    return $('[id="user_login_phone"]');
  }
  get submitBtn() {
    return $('[class="ant-btn ant-btn-primary ant-btn-lg"]');
  }

  get skipSidePanelBtn() {
    return $('[class="ant-btn text-right ant-btn-link ant-btn-lg"]');
  }

  get closeBtn() {
    return $('[class="anticon anticon-close"]');
  }

  get drawerTitle() {
    return $('[class="ant-drawer-title"]');
  }

  get countryLabel() {
    return $('[title="Country"]');
  }

  get phoneLabel() {
    return $('[title="Phone"]');
  }

  get defaultCountryPlaceholder() {
    return $('[class="ant-select-selection-item"]');
  }

  get defaultPhonePrefix() {
    return $('[class="ant-input-prefix"]');
  }

  get settingsEditPhone() {
    return $('[id="editProfile_phone"]');
  }

  get saveBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }

  get openDropdown() {
    return $('[class="ant-dropdown-link ant-dropdown-trigger"]');
  }

  get settings() {
    return $('//a[contains(text(),"Settings")]');
  }

  skip() {
    this.skipSidePanelBtn.click();
  }

  close() {
    this.closeBtn.click();
  }

  submitForm(data) {
    this.phoneNumber.setValue(RegisterData.phone);
    this.submitBtn.click();
  }

  deletePhone() {
    this.settingsEditPhone.clearValue();
    this.saveBtn.click();
  }

  moveToSettings() {
    this.openDropdown.click();
    this.settings.click();
  }

  open() {
    return super.open('user/login');
  }
}
export default new SidePanelPage();
