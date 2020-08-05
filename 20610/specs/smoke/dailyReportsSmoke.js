import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import { newUser } from '../../../20610/data/fakeData';
import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
let res = null;

before(() => {
  LoginPage.open();
  LoginPage.login(user.learner.email, user.learner.password);
});

describe('DAILY REPORT SMOKE', () => {
  it('DR01 A DAILY REPORT CAN BE SUCCESSFULLY CREATED', () => {
    res = DailyReportsPage.reportQty.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[newUser.index1].click();
    DailyReportsPage.inputHours.click();
    DailyReportsPage.selectContentMoraleAndHours[20].scrollIntoView();
    DailyReportsPage.selectContentMoraleAndHours[20].click();
    DailyReportsPage.howWasYourDayInput.click();
    DailyReportsPage.howWasYourDayInput.setValue(newUser.message);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil(() => DailyReportsPage.newDailyReportCreatedText.getText() === newUser.message);
    expect(+DailyReportsPage.reportQty.getText()).eq(+(res + 1));
   //bug reported in https://jira.pasv.us/browse/LC-192
  });
});
