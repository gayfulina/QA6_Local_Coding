import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';

before(() => {
  HomePage.open();
  HomePage.registerLink.click();
  RegisterPage.registerUser(user);
});

describe('Register step-2 route-1', () => {
  it('TC-008-014 Verify that user can change country', function () {
    RegisterStep2Page.openDropdown.click();
    RegisterStep2Page.countryDropdown.click();
    expect(RegisterStep2Page.openDropdown.getText()).eq(expected.registerStep2Data.changeCountry);
  });

  it('TC-008-015 Verify that if user changes country phone prefix changes automatically', function () {
    browser.refresh();
    RegisterStep2Page.openDropdown.click();
    RegisterStep2Page.countryDropdown.click();
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq(expected.registerStep2Data.changePrefix);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
