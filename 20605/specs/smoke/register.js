import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import {newUser} from '../../testData/register';
import ProfilePage from '../../../pageObjects/profile.page';

describe('REGISTER', function() {
  it('TC-091 should verify that newUser can register', function() {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    expect((ProfilePage.headerProfile).getText()).eq(newUser.firstName + ' ' + newUser.lastName);
  });
});