import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('LOGIN FUNCTIONALITY', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Successful login as ADMIN', function () {
    LoginPage.login(user.admin.email, user.admin.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).equal(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('Successful login as New User', function () {
    LoginPage.login(user.new.email, user.new.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).equal(user.new.firstName + ' ' + user.new.lastName);
  });

  it('Successful login as Learner', function () {
    LoginPage.login(user.learner.email, user.learner.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).equal(user.learner.firstName + ' ' + user.learner.lastName);
  });

  it('Successful login as Student', function () {
    LoginPage.login(user.student.email, user.student.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).equal(user.student.firstName + ' ' + user.student.lastName);
  });
});
