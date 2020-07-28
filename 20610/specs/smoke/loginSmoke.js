import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import expected from '../../data/expected.json';

before(() => {
  LoginPage.open();
});

describe('POSITIVE ADMIN LOGIN', () => {

  it('UL01 Login as admin with correct data', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    expect(ProfilePage.badge.getText()).eq(expected.userBadges.admin);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.admin.firstName} ${user.admin.lastName}`);
    ProfilePage.logout();
  });

  it('UL02 Should have h1 Welcome back!', () => {
    expect(LoginPage.getLogoutConfirmation()).eq(expected.loginPageHeader.h1);
  });

});

describe('POSITIVE LEARNER LOGIN', () => {

  it('UL03 Login as learner with correct data', () => {
    LoginPage.validLogin(user.learner.email, user.learner.password);
    expect(ProfilePage.badge.getText()).eq(expected.userBadges.learner);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.learner.firstName} ${user.learner.lastName}`);
    if (LoginPage.errorMessageCloseBtn.isDisplayed()) {
      LoginPage.closeMessage();
    }
    ProfilePage.logout();
  });

});

describe('POSITIVE STUDENT LOGIN', () => {

  it('UL04 Login as student with correct data', () => {
    LoginPage.validLogin(user.student.email, user.student.password);
    expect(ProfilePage.badge.getText()).eq(expected.userBadges.student);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.student.firstName} ${user.student.lastName}`);
    if (LoginPage.errorMessageCloseBtn.isDisplayed()) {
      LoginPage.closeMessage();
    }
    ProfilePage.logout();
  });

});

