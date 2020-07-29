import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import user from '../../../testData/user';
import LoginPage from '../../../pageObjects/login.page';
import { textProfile } from '../../data/profile.data';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('DAILY REPORT CREATED', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  it('should Create daily report', function () {
    DailyReportsPage.createDayReport();
    //DailyReportsPage.lastDailyReportText.waitForDisplayed(WAIT_TIME_MEDIUM);
    browser.pause(3000);
    expect(DailyReportsPage.lastDailyReportText.getText()).eq(textProfile.howWasYourDayText);
  });
});
