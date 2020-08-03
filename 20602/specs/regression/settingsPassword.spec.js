import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPassword from '../../../pageObjects/settingsPassword.page';
import expected from '../../data/expected.json';
import { newRole, admin } from '../../data/settingsPasswordData';

before(() => {
  LoginPage.open();
  LoginPage.login(newRole.email, newRole.oldPassword);
  ProfilePage.dropDownUserMenu.click();
  ProfilePage.settingsLink.click();
  SettingsPassword.passwordTab.click();
});

describe('ALL ELEMENTS IS PRESENT CORRECTLY', () => {
  it('TC-003-001 Old password IF is present ', function () {
    expect(SettingsPassword.oldPasswordInput.isDisplayed()).true;
  });

  it('TC-003-002 New password IF is present ', function () {
    expect(SettingsPassword.newPasswordInput.isDisplayed()).true;
  });

  it('TC-003-003 Confirm New password IF is present ', function () {
    expect(SettingsPassword.confirmNewPasswordInput.isDisplayed()).true;
  });

  it('TC-003-004 Update Password button is present ', function () {
    expect(SettingsPassword.updatePasswordButton.isDisplayed()).true;
  });

  it('TC-003-005 Old password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.oldPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-006 New password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.newPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-007 Confirm new password IF have toggle visibility icon ', function () {
    expect(SettingsPassword.confirmNewPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-008 Label of Old password IF = Old password', function () {
    expect(SettingsPassword.oldPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-008-oldPasswordLabel']);
  });

  it('TC-003-009 Label of New password IF = New password', function () {
    expect(SettingsPassword.newPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-009-newPasswordLabel']);
  });

  it('TC-003-010 Label of Confirm New password IF = Confirm new password', function () {
    expect(SettingsPassword.confirmNewPasswordLabel.getText()).eq(
      expected.settingsPasswordData['TC-003-010-confirmNewPasswordLabel'],
    );
  });

  it('TC-003-011 Update password button = Update Password', function () {
    expect(SettingsPassword.updatePasswordButton.getText()).eq(expected.settingsPasswordData['TC-003-011-updatePasswordButton']);
  });

  it('TC-003-012 Update password button is disabled by default', function () {
    expect(SettingsPassword.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-013 Update password button disabled until all fields are filled in (Confirm new password = empty)', function () {
    SettingsPassword.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordEmpty);
    expect(SettingsPassword.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-014 Update password button disabled until all fields are filled in (new password = empty)', function () {
    browser.refresh();
    SettingsPassword.updatePasswordNegative(newRole.oldPassword, newRole.newPasswordEmpty, newRole.confirmNewPassword);
    expect(SettingsPassword.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-015 Update password button disabled until all fields are filled in (old password = empty)', function () {
    browser.refresh();
    SettingsPassword.updatePasswordNegative(newRole.oldPasswordEmpty, newRole.newPasswordEmpty, newRole.confirmNewPassword);
    expect(SettingsPassword.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-016 Update password button enabled when all fields are filled in', function () {
    browser.refresh();
    SettingsPassword.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPassword);
    expect(SettingsPassword.updatePasswordButton.isEnabled()).true;
  });

  it('TC-003-017 Old password eye icon is works', function () {
    SettingsPassword.oldPasswordInput.setValue(newRole.oldPassword);
    SettingsPassword.oldPasswordEyeIcon.click();
    expect(SettingsPassword.oldPasswordInput.getAttribute('type')).eq(expected.settingsPasswordData['TC-003-017-08-019-TypeInput']);
  });

  it('TC-003-018 New password eye icon is works', function () {
    SettingsPassword.newPasswordInput.setValue(newRole.newPassword);
    SettingsPassword.newPasswordEyeIcon.click();
    expect(SettingsPassword.newPasswordInput.getAttribute('type')).eq(expected.settingsPasswordData['TC-003-017-08-019-TypeInput']);
  });

  it('TC-003-019 Confirm new password eye icon is works', function () {
    SettingsPassword.confirmNewPasswordInput.setValue(newRole.newPassword);
    SettingsPassword.confirmNewPasswordEyeIcon.click();
    expect(SettingsPassword.confirmNewPasswordInput.getAttribute('type')).eq(
      expected.settingsPasswordData['TC-003-017-08-019-TypeInput'],
    );
  });

  it('TC-003-020 Wrong old password: pop-up error message will appear ', function () {
    browser.refresh();
    SettingsPassword.updatePassword(newRole.oldPasswordIncorrect, newRole.newPassword);
    SettingsPassword.popUpWrongOldPwrd.waitForDisplayed();
    expect(SettingsPassword.popUpWrongOldPwrd.isDisplayed()).true;
  });

  it('TC-003-021 Wrong old password: pop-up error message = User Settings Update: Error', function () {
    browser.refresh();
    SettingsPassword.updatePassword(newRole.oldPasswordIncorrect, newRole.newPassword);
    SettingsPassword.popUpWrongOldPwrd.waitForDisplayed();
    expect(SettingsPassword.popUpWrongOldPwrd.getText()).eq(expected.settingsPasswordData['TC-003-021-popUpMsg']);
  });

  it('TC-003-022 pop-up error window closed after refresh', function () {
    browser.refresh();
    expect(SettingsPassword.popUpWrongOldPwrd.isDisplayed()).false;
  });

  it('TC-003-023 "New password mismatch: error message is appears', function () {
    browser.refresh();
    SettingsPassword.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordIncorrect);
    expect(SettingsPassword.errorMsgPasswordNotMatch.isDisplayed()).true;
  });

  it('TC-003-024 "New password mismatch: error message = New passwords do not match', function () {
    browser.refresh();
    SettingsPassword.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordIncorrect);
    expect(SettingsPassword.errorMsgPasswordNotMatch.getText()).eq(expected.settingsPasswordData['TC-003-024-errorMsg']);
  });
});
