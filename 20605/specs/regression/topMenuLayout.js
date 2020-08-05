import LoginPage from '../../../pageObjects/login.page';
import topMenuPage from '../../../pageObjects/topMenu.page'
import { admin } from '../../../testData/user';
import { topMenu } from '../../testResult/topMenu';

describe('TOPMENU LAYOUT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(admin.email, admin.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  describe('MAIN ELEMENTS ARE DISPLAYED FOR ADMIN', function () {
    it('logo is displayed', function () {
      expect(topMenuPage.logo.isDisplayed());
    });

    it('label is displayed', function () {
      expect(topMenuPage.homePageLink.isDisplayed());
    });

    it('label has correct text', function () {
      expect(topMenuPage.homePageLink.getText()).eq(topMenu.label);
    });

    it('Base Link is displayed', function () {
      expect(topMenuPage.baseLink.isDisplayed());
    });

    it('Base Link has correct text', function () {
      expect(topMenuPage.baseLink.getText()).eq(topMenu.baseLink);
    });

    it('Courses Link is displayed', function () {
      expect(topMenuPage.coursesLink.isDisplayed());
    });

    it('Courses Link has correct text', function () {
      expect(topMenuPage.coursesLink.getText()).eq(topMenu.coursesLink);
    });

    it('Cards Link is displayed', function () {
      expect(topMenuPage.cardsLink.isDisplayed());
    });

    it('Cards Link has correct text', function () {
      expect(topMenuPage.cardsLink.getText()).eq(topMenu.cardsLink);
    });

    it('Diary Link is displayed', function () {
      expect(topMenuPage.diaryLink.isDisplayed());
    });

    it('Diary Link has correct text', function () {
      expect(topMenuPage.diaryLink.getText()).eq(topMenu.diaryLink);
    });

    it('Groups Link is displayed', function () {
      expect(topMenuPage.groupsLink.isDisplayed());
    });

    it('Groups Link has correct text', function () {
      expect(topMenuPage.groupsLink.getText()).eq(topMenu.groupsLink);
    });

    it('Users Link is displayed', function () {
      expect(topMenuPage.usersLink.isDisplayed());
    });

    it('Users Link has correct text', function () {
      expect(topMenuPage.usersLink.getText()).eq(topMenu.usersLink);
    });

    it('Challenges Link is displayed', function () {
      expect(topMenuPage.challengesLink.isDisplayed());
    });

    it('Challenges Link has correct text', function () {
      expect(topMenuPage.challengesLink.getText()).eq(topMenu.challengesLink);
    });

    it('Telephony Link is displayed', function () {
      expect(topMenuPage.telephonyLink.isDisplayed());
    });

    it('Telephony Link has correct text', function () {
      expect(topMenuPage.telephonyLink.getText()).eq(topMenu.telephonyLink);
    });

    it('Shop Link is displayed', function () {
      expect(topMenuPage.shopLink.isDisplayed());
    });

    it('Shop Link has correct text', function () {
      expect(topMenuPage.shopLink.getText()).eq(topMenu.shopLink);
    });

    it('Orders Link is displayed', function () {
      expect(topMenuPage.ordersLink.isDisplayed());
    });

    it('Orders Link has correct text', function () {
      expect(topMenuPage.ordersLink.getText()).eq(topMenu.ordersLink);
    });

    it('CoinImg is displayed', function () {
      expect(topMenuPage.coinImg.isDisplayed());
    });

    it('AchievmentsLink is displayed', function () {
      expect(topMenuPage.achievementsLink.isDisplayed());
    });

    it('UserAvatarImg is displayed', function () {
      expect(topMenuPage.userAvatarImg.isDisplayed());
    });

    it('UserAvatarName is displayed', function () {
      expect(topMenuPage.userAvatarName.isDisplayed());
    });

    it('DropDownArrow is displayed', function () {
      expect(topMenuPage.dropDownArrow.isDisplayed());
    });

    it('DropDownMenuProfile is displayed', function () {
      expect(topMenuPage.dropDownMenuProfile.isDisplayed());
    });

    it('DropDownMenuSettings is displayed', function () {
      expect(topMenuPage.dropDownMenuSettings.isDisplayed());
    });

    it('DropDownMenuOrders is displayed', function () {
      expect(topMenuPage.dropDownMenuOrders.isDisplayed());
    });

    it('DropDownMenuLogOut is displayed', function () {
      expect(topMenuPage.dropDownMenuLogOut.isDisplayed());
    });
  });
});
