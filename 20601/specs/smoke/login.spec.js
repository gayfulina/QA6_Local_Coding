import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('LOGIN', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-001 Successful login as an admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('TC-002 Successful login as an new user', () => {
    LoginPage.validLogin(user.new.email, user.new.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
  });

  it('TC-003 Successful login as an learner', () => {
    LoginPage.validLogin(user.learner.email, user.learner.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });
});
