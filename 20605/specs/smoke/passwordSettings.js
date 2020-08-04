import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import LoginPage from '../../../pageObjects/login.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import { newUser } from '../../testData/register';
import { passwordSettingsInputs } from '../../testData/passwordSettings';
import { WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';

describe('UPDATE PASSWORD IN SETTINGS', () => {
  it('TC-199 User (new) can update password in settings', function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
    SettingsPasswordPage.updatePassword(newUser.password, passwordSettingsInputs.passwordNew);
    LoginPage.open();
    LoginPage.login(newUser.email, passwordSettingsInputs.passwordNew);
    TopMenuPage.userAvatarName.waitForDisplayed({ WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(newUser.firstName + ' ' + newUser.lastName);
  });
});