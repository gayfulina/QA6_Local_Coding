import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import waitTime from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';
import LoginPage from '../../../pageObjects/login.page';

before(() => {
  HomePage.open();
  HomePage.registerLink.click();
  RegisterPage.registerUser(user);
});

describe('Pop-up drawer', () => {
  it('TC-008-047 Verify that if user clicks "Skip", log-out, log-in - pop-up drawer shows-up', function () {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password)
    expect(RegisterStep2Page.popupDrawer.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
