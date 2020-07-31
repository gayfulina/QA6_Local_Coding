import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../../20610/data/expected.json';
import { newUser } from '../../data/fakeData';
import ProfilePage from '../../../pageObjects/profile.page';

describe('NEW USER REGISTER STEP2', function () {
  before(function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
  });

  it('URST2 Should fill data on the step2', function () {
    RegisterStep2Page.registerUserStep2(newUser);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});
