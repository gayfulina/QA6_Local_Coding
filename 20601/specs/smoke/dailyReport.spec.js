import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import user from '../../../testData/user';
import LoginPage from '../../../pageObjects/login.page';
import { textProfile } from '../../data/profile.data';

describe('DAILY REPORT CREATED', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  it('should Create daily report', function () {
    DailyReportsPage.createDayReport();
    DailyReportsPage.lastDailyReportText.waitForDisplayed();
    expect(DailyReportsPage.lastDailyReportText.getText()).eq(textProfile.howWasYourDayText);
  });
});
