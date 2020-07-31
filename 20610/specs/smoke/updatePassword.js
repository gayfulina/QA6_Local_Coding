import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import { newUser } from '../../data/fakeData';
import ProfilePage from '../../../pageObjects/profile.page';
import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';

describe('NEW USER PASSWORD UPDATE', function () {
  before(function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
  });

  it('user should be able to update his password', function () {
    SettingsPasswordPage.updatePassword(newUser.password, newUser.newPassword);
    ProfilePage.logout();
  });

  it('should check if a user can login with updated password', function () {
    LoginPage.login(newUser.email, newUser.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});
