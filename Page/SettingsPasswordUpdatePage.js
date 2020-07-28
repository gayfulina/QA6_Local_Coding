import BasePage from "./BasePage";

class SettingsPasswordUpdatePage extends BasePage {

  get placeholderOldPassword() { return $('[title="Old password"]')}
  get oldPassword() { return $('#oldPassword')}
  get newPassword() { return $('#newPassword')}
  get confirmPassword() { return $('#confirmPassword')}
  get updatePasswordBtn() { return $('.ant-btn.ant-btn-primary')}
}

export default new SettingsPasswordUpdatePage();