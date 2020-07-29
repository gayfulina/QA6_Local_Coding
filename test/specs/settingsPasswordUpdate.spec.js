import {expect} from "chai";
import LoginPage from "../../Page/LoginPage";
import {student} from "../../Data/userData";
import SettingsPasswordUpdatePage from "../../Page/SettingsPasswordUpdatePage";
import SettingsPage from "../../Page/SettingsPage";
import ProfilePage from "../../Page/ProfilePage";
import UserDropDownPage from "../../Page/UserDropDownPage";
import WAIT_TIME_MEDIUM from "../../Data/waitTimes";

describe( 'SETTINGS CHANGE PASSWORD', () => {
  before( () => {
    LoginPage.login(student.email, student.password);
    browser.waitUntil( () => ProfilePage.getLoginConfirmation() === student.name);
  });
/*
  it('should go to correct profile', () => {
    const name = UserDropDownPage.userName.getText();
    expect(name).eq(student.name);
  });
*/
  it('should go to Settings page', () => {
    UserDropDownPage.goToSettings();
    browser.waitUntil( () => SettingsPage.userMenuSettings.isDisplayed());
  });

  it('should click Password link in menu', () => {
    SettingsPage.passwordSettings.click();
    browser.waitUntil( () => SettingsPasswordUpdatePage.placeholderOldPassword.isDisplayed());
  });

  it('should fill out Change Password form', () => {
    SettingsPasswordUpdatePage.oldPassword.setValue(student.password);
    SettingsPasswordUpdatePage.newPassword.setValue(student.passwordNew);
    SettingsPasswordUpdatePage.confirmPassword.setValue(student.passwordNew);
    SettingsPasswordUpdatePage.updatePasswordBtn.click();
    browser.pause(1000);
  });

  it('should user login with new password', () => {
    LoginPage.login(student.email, student.passwordNew);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect( ProfilePage.getLoginConfirmation()).eq(student.name);
  });

  it('should user restore old password', () => {
    LoginPage.login(student.email, student.passwordNew);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    UserDropDownPage.goToSettings();
    SettingsPage.passwordSettings.click();
    SettingsPasswordUpdatePage.restoreOldPassword();
    browser.pause(1000);
  });

  it('should user login with old password', () => {
    LoginPage.login(student.email, student.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect( ProfilePage.getLoginConfirmation()).eq(student.name);
  });

});
