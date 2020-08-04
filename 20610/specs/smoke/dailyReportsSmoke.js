import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import { newUser } from '../../../20610/data/fakeData';
import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import { ContactUsValues } from '../../../20610/data/expected.json';
import { WAIT_TIME_LONGEST } from '../../../testData/waitTimes';

before(() => {
  LoginPage.open();
  LoginPage.login(user.learner.email, user.learner.password);
});

describe('DAILY REPORT SMOKE', () => {
  it('DR01 A DAILY REPORT CAN BE SUCCESSFULLY CREATED', () => {
    const res = DailyReportsPage.reportQty.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[3].click();
    DailyReportsPage.inputHours.click();
    DailyReportsPage.selectContentMoraleAndHours[12].waitForClickable({ timeout: WAIT_TIME_LONGEST }); // tests not stable
    DailyReportsPage.selectContentMoraleAndHours[12].click(); //only work with 11,12,13 up to 18, still in progress to figure this out
    DailyReportsPage.howWasYourDayInput.setValue(newUser.message);
    DailyReportsPage.submitBtn.waitForClickable({ timeout: WAIT_TIME_LONGEST });
    DailyReportsPage.submitBtn.click();
    browser.pause(3000); // not working without this pause, waitFor doesn't help
    expect(DailyReportsPage.reportQty.getText() - res).eq(ContactUsValues.dailyReportDifference); //not working due to a bug
  });
});
