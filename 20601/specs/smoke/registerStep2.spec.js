import RegisterStep2Page from '../../../pageObjects/register.page';
import LoginPage from "../../../pageObjects/login.page";
import ProfilePage from '../../pageObjects/profile.page';
import { textStep1, userStep1, textStep2, userStep2, textLogin } from '../../data/registerAndLoginData';


describe('USER REGISTER STEP2', () => {
  before(() => {
    RegisterStep2Page.open();
  });

  it('should populate fields and submit form', () => {
    RegisterStep2Page.registerUser(data);
    //expect(ProfilePage.profilePageHeader.getText()).contains(data.firstName);
  });

  xit('should skip the Registration Step2 and open Main Page', function () {
    RegisterStep2Page.open();
    RegisterStep2Page.skipBtn.click();
    //expect(ProfilePage.profilePageHeader.getText()).contains(data.firstName);
  });
});
