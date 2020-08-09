import DailyReportsPage from '../../pageObjects/dailyReports.page';
import waitTime from '../../testData/waitTimes';

export function createDailyRep(moraleLevel, hoursNumber, reportText) {
  DailyReportsPage.createDayReportBtn.click();
  for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
    DailyReportsPage.checkbox[i].click();
  }
  DailyReportsPage.inputMoral.click();
  DailyReportsPage.selectContentMoraleAndHours[moraleLevel].click();
  DailyReportsPage.selectedContentMoraleAndHours[0].waitForExist({ timeout: waitTime.WAIT_TIME_LONG });
  DailyReportsPage.inputHours.click();
  DailyReportsPage.selectContentMoraleAndHours[hoursNumber].click();
  DailyReportsPage.selectedContentMoraleAndHours[1].waitForExist({ timeout: waitTime.WAIT_TIME_LONG });
  DailyReportsPage.howWasYourDayInput.setValue(reportText);
  DailyReportsPage.submitBtn.click();
  DailyReportsPage.newDailyReportCreatedText.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
  // browser.refresh();
}
