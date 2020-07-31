import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../../20610/data/expected.json';
import { newUser } from '../../data/fakeData';
import ProfilePage from '../../../pageObjects/profile.page';

describe('NEW USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('UR02 should register user', () => {
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});
