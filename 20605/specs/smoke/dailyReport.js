import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import user from '../../../testData/user';
import LoginPage from '../../../pageObjects/login.page';
import { dailyReport } from '../../testData/dailyReport';

describe('DAILY REPORTS FUNCTIONALITY', function() {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
  });

  it('TC-220 daily report can be created by learner', function() {
    let dailyReportsQty = +DailyReportsPage.reportQty.getText();
    let dailyReportText = DailyReportsPage.lastDailyReportText.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[0].click();
    DailyReportsPage.inputHours.click();
    browser.pause(2000);
    DailyReportsPage.selectContentMoraleAndHours[21].scrollIntoView();
    DailyReportsPage.selectContentMoraleAndHours[21].click();
    DailyReportsPage.howWasYourDayInput.click();
    DailyReportsPage.howWasYourDayInput.setValue(dailyReport.howWasYourDayText);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil(() => DailyReportsPage.newDailyReportCreatedText.getText() !== dailyReportText);
    expect(+DailyReportsPage.reportQty.getText()).eq(dailyReportsQty + 1);
  });

  it('TC-221 created daily report contains selected by learner checkbox "I need help"', function() {
    let dailyReportText = DailyReportsPage.lastDailyReportText.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[0].click();
    DailyReportsPage.inputHours.click();
    browser.pause(2000);
    DailyReportsPage.selectContentMoraleAndHours[21].scrollIntoView();
    DailyReportsPage.selectContentMoraleAndHours[21].click();
    DailyReportsPage.howWasYourDayInput.click();
    DailyReportsPage.howWasYourDayInput.setValue(dailyReport.howWasYourDayText);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil(() => DailyReportsPage.newDailyReportCreatedText.getText() !== dailyReportText);
    expect($$('.ant-tag')[0].getText()).eq('I need help');
  });

  it('TC-222 created daily report contains text created by learner', function() {
    let dailyReportText = DailyReportsPage.lastDailyReportText.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[0].click();
    DailyReportsPage.inputHours.click();
    browser.pause(2000);
    DailyReportsPage.selectContentMoraleAndHours[21].scrollIntoView();
    DailyReportsPage.selectContentMoraleAndHours[21].click();
    DailyReportsPage.howWasYourDayInput.click();
    DailyReportsPage.howWasYourDayInput.setValue(dailyReport.howWasYourDayText);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil(() => DailyReportsPage.newDailyReportCreatedText.getText() !== dailyReportText);
    expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReport.howWasYourDayText);
  });
});
