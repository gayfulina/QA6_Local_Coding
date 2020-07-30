import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
const Expected = require('../../data/expected.json').pagesHeaders;

describe('TOP MENU', () => {
  describe('Label and Logo', () => {
    before(() => {
      LoginPage.open('/');
      LoginPage.login('adminqa6@admin.us', '123123'); // delete hardcode when data file would be created
    });

    it('Should check logo is displayed', function () {
      TopMenuPage.logo.isDisplayed().true;
    });

    it('should check label is displayed', function () {
      TopMenuPage.label.isDisplayed().true;
    });

    it('click on Logo/label go to main page', function () {
      browser.waitUntil(() => TopMenuPage.logo.isClickable());
      TopMenuPage.label.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.MainPageHeader);
    });
  });

  describe('Top Menu Tabs', () => {
    before(() => {
      LoginPage.open('/');
      LoginPage.login('adminqa6@admin.us', '123123'); // delete hardcode when data file would be created
    });

    it('click on Courses go to Courses Page', function () {
      TopMenuPage.coursesLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.CoursesPage);
    });

    it('click on Cards go to Cards Page', function () {
      TopMenuPage.cardsLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Cards);
    });

    it('click on Diary go to Diary Page', function () {
      TopMenuPage.diaryLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Diary);
    });

    it('click on Groups go to Groups Page', function () {
      TopMenuPage.groupsLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Groups);
    });

    it('click on Users go to Users Page', function () {
      TopMenuPage.usersLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Users);
    });

    it('click on Challenges go to Challenge Page', function () {
      TopMenuPage.challengesLink.click();
      expect(TopMenuPage.headerChallenge.getText()).eq(Expected.Challenges);
    });

    it('click on Telephony go to Telephony Page', function () {
      TopMenuPage.telephonyLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Telephony);
    });

    it('click on Orders go to Orders Page', function () {
      TopMenuPage.ordersLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Orders);
    });
  });

  describe('Coins and Achievments', () => {
    before(() => {
      LoginPage.open('/');
      LoginPage.login('adminqa6@admin.us', '123123'); // delete hardcode when data file would be created
    });

    it('click on Coin go to Achievments Page', function () {
      TopMenuPage.coinImg.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Achievements);
    });

    it('click on Coin Quantity go to Achievments Page', function () {
      TopMenuPage.achievementsLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.Achievements);
    });
  });

  // describe('User Drop Down Menu', () => {});
});
