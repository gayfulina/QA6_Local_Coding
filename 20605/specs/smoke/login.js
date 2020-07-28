import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import {admin} from '../../../testData/user.js';
import {WAIT_TIME_SHORT} from '../../../testData/waitTimes';

describe('LOGIN AS ADMIN', function() {
  it('should verify that user can login as ADMIN', function() {
    LoginPage.open();
    LoginPage.login(admin.email, admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(admin.firstName + ' ' + admin.lastName);
  });
});