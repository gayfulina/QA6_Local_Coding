import LoginPage from '../../../pageObjects/login.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import user from '../../../testData/user';
import {WAIT_TIME_SHORT} from '../../../testData/waitTimes';
import {loginPage} from '../../testResult/login';

describe('LOGOUT FUNCTIONALITY', function() {
  before(() => {
    LoginPage.open();
  });

  it('TC-052 should verify that NEW USER can logout to Login Page', function() {
    LoginPage.login(user.new.email, user.new.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({WAIT_TIME_SHORT});
    expect((LoginPage.headerLogin).getText()).eq(loginPage.header);
  });

  it('TC-051 should verify that ADMIN can logout to Login Page', function() {
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({WAIT_TIME_SHORT});
    expect((LoginPage.headerLogin).getText()).eq(loginPage.header);
  });

  it('TC-053 should verify that LEARNER can logout to Login Page', function() {
    LoginPage.login(user.learner.email, user.learner.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({WAIT_TIME_SHORT});
    expect((LoginPage.headerLogin).getText()).eq(loginPage.header);
  });

  it('TC-054 should verify that STUDENT can logout to Login Page', function() {
    LoginPage.login(user.student.email, user.student.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({WAIT_TIME_SHORT});
    expect((LoginPage.headerLogin).getText()).eq(loginPage.header);
  });
});
