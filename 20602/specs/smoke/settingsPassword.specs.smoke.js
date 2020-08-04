import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import LoginPage from '../../../pageObjects/login.page';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import expected from '../../data/expected.json';

describe('NEW USER CHANGE PASSWORD', function () {
  before(function () {
    RegisterPage.open();
    RegisterPage.registerUser(user);
    RegisterStep2.registerUserStep2(user);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
  });

  it('TC-003-028 User stays logged in after password has been changed', function () {
    SettingsPasswordPage.updatePassword(user.password, user.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('TC-003-29 User can log in using the new password', function () {
    ProfilePage.logout();
    LoginPage.login(user.email, user.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.firstName} ${user.lastName}`);
  });

  after('Should delete a New user', async () => {
    const res = await userDelete(user.email);
    expect(res.success).eq(true);
  });
});
