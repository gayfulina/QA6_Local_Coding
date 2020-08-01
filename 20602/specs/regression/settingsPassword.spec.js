import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPassword from '../../../pageObjects/settingsPassword.page';
import expected from '../../data/expected.json'

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  ProfilePage.settingsLink.click();
  SettingsPassword.passwordTab.click();
});

describe('ALL ELEMENTS IS PRESENT CORRECTLY', () => {
  it('TC-003-01 Old password IF is present ', function () {
    expect(SettingsPassword.oldPasswordInput.isDisplayed()).true;
  });

  it('TC-003-02 New password IF is present ', function () {
    expect(SettingsPassword.newPasswordInput.isDisplayed()).true;
  });

  it('TC-003-03 Confirm New password IF is present ', function () {
    expect(SettingsPassword.confirmNewPasswordInput.isDisplayed()).true;
  });

  it('TC-003-04 Update Password button is present ', function () {
    expect(SettingsPassword.updatePasswordButton.isDisplayed()).true;
  });

  it('TC-003-05 Old password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.oldPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-06 New password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.newPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-07 Confirm new password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.confirmNewPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-08 Label of Old password IF = Old password', function () {
    expect(SettingsPassword.oldPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-08-oldPasswordLabel']);
  });

  it('TC-003-09 Label of New password IF = New password', function () {
    expect(SettingsPassword.newPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-09-newPasswordLabel']);
  });

  it('TC-003-10 Label of Confirm New password IF = Confirm new password', function () {
    expect(SettingsPassword.confirmNewPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-10-confirmNewPasswordLabel']);
  });

  it('TC-003-11 Update password button = Update Password', function () {
    expect(SettingsPassword.updatePasswordButton.getText()).eq(expected.settingsPasswordData['TC-003-11-updatePasswordButton']);
  });

  it('TC-003-12 Update password button is disabled by default', function () {
    expect(SettingsPassword.updatePasswordButton.isEnabled()).false;
  });

});
