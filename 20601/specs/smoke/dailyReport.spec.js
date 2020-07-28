import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../pageObjects/profile.page';
import { textProfile } from '../../data/profile.data';


describe('VERIFY ', () => {
  before(() => {
    ProfilePage.openProfilePage();
  });

  it('should Create day report', function () {
    ProfilePage.returnToProfilePage()
    ProfilePage.createDayReport();
    expect(ProfilePage.daylyReportsHeader.getText()).contains(textProfile.daylyReportsHeaderText);
  });


});