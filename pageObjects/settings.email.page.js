import BasePage from './Base.page';

class SettingsEmailPage extends BasePage {
  get emailTab() {
    return $$('.ant-menu-item')[2];
  }

  get oldEmailTitle() {
    return $('//label[@for="oldEmail"]');
  }

  get newEmailTitle() {
    return $('//label[@for="newEmail"]');
  }

  get confirmEmailTitle() {
    return $('//label[@for="confirmEmail"]');
  }

  get oldEmailField() {
    return $('//input[@id="oldEmail"]');
  }

  get newEmailField() {
    return $('//input[@id="newEmail"]');
  }

  get confirmEmailField() {
    return $('//input[@id="confirmEmail"]');
  }

  get submitButton() {
    return $('//button[@type="submit"]');
  }
}

export default new SettingsEmailPage();
