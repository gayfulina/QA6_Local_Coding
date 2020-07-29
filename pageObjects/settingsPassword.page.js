import BasePage from './Base.page';

class SettingsPasswordPage extends BasePage {
  get passwordTab() {
    return $$('.ant-menu-item')[1];
  }

  get oldPasswordInput() {
    return $('#oldPassword');
  }

  get newPasswordInput() {
    return $('#newPassword');
  }

  get confirmNewPasswordInput() {
    return $('#confirmPassword');
  }

  get updatePasswordButton() {
    return $('.ant-btn');
  }

  get oldPasswordEyeIcon() {
    return $$('.ant-input-suffix')[0];
  }

  get newPasswordEyeIcon() {
    return $$('.ant-input-suffix')[1];
  }

  get confirmNewPasswordEyeIcon() {
    return $$('.ant-input-suffix')[2];
  }

  get oldPasswordLabel() {
    return $('[for="oldPassword"]');
  }

  get newPasswordLabel() {
    return $('[for="newPassword"]');
  }

  get confirmNewPasswordLabel() {
    return $('[for="confirmPassword"]');
  }
}

export default new SettingsPasswordPage();
