import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import {admin} from '../../../testData/user.js';
import {learner} from '../../../testData/user.js';
import {student} from '../../../testData/user.js';
import {WAIT_TIME_SHORT} from '../../../testData/waitTimes';

describe('LOGIN FUNCTIONALITY', function() {

  before(() => {
    LoginPage.open();
  });

  it('should verify that user can login as ADMIN', function() {
    LoginPage.open();
    LoginPage.login(admin.email, admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(admin.firstName + ' ' + admin.lastName);
  });

  it('should verify that user can login as LEARNER', function() {
    LoginPage.open();
    LoginPage.login(learner.email, learner.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(learner.firstName + ' ' + learner.lastName);
  });

  it('should verify that user can login as STUDENT', function() {
    LoginPage.open();
    LoginPage.login(student.email, student.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(student.firstName + ' ' + student.lastName);
  });
});