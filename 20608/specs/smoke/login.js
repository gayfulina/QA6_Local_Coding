import { expect } from 'chai';
import LoginPage from './../../../pageObjects/login.page';
const user = require('./../../../testData/user');
import ProfilePage from './../../../pageObjects/profile.page';

describe('LOGIN AS ADMIN', () => {
  beforeEach(() => {
    LoginPage.open()
  });

  it('should login as Admin', () => {
    LoginPage.login(user.admin.email, user.admin.password);
    expect(ProfilePage.getLoginConfirmation());
    ProfilePage.logout();
  });

  it('should login as Learner', () => {
    LoginPage.login(user.learner.email, user.learner.password);
    expect(ProfilePage.getLoginConfirmation());
    ProfilePage.logout();
  });

  it('should login as Student', () => {
    LoginPage.login(user.student.email, user.student.password);
    expect(ProfilePage.getLoginConfirmation());
    ProfilePage.logout();
  });

});




