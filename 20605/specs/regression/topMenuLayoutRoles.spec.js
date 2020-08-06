import LoginPage from '../../../pageObjects/login.page';
import topMenuPage from '../../../pageObjects/topMenu.page'
import user from '../../../testData/user';

describe('MAIN ELEMENTS ARE DISPLAYED for LEARNER', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

    it('Base Link is displayed', function () {
      expect(topMenuPage.baseLink.isDisplayed()).false;
    });

    it('Courses Link is displayed', function () {
      expect(topMenuPage.coursesLink.isDisplayed());
    });

    it('Cards Link is displayed', function () {
      expect(topMenuPage.cardsLink.isDisplayed()).false;
    });

    it('Diary Link is displayed', function () {
      expect(topMenuPage.diaryLink.isDisplayed());
    });

    it('Groups Link is displayed', function () {
      expect(topMenuPage.groupsLink.isDisplayed()).false;
    });

    it('Users Link is displayed', function () {
      expect(topMenuPage.usersLink.isDisplayed()).false;
    });

    it('Challenges Link is displayed', function () {
      expect(topMenuPage.challengesLink.isDisplayed()).false;
    });

    it('Telephony Link is displayed', function () {
      expect(topMenuPage.telephonyLink.isDisplayed()).false;
    });

    it('Shop Link is displayed', function () {
      expect(topMenuPage.shopLink.isDisplayed()).false;
    });

    it('Orders Link is displayed', function () {
      expect(topMenuPage.ordersLink.isDisplayed()).false;
    });
});

describe('MAIN ELEMENTS ARE DISPLAYED for STUDENT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  it('Base Link is displayed', function () {
    expect(topMenuPage.baseLink.isDisplayed()).false;
  });

  it('Courses Link is displayed', function () {
    expect(topMenuPage.coursesLink.isDisplayed());
  });

  it('Cards Link is displayed', function () {
    expect(topMenuPage.cardsLink.isDisplayed());
  });

  it('Diary Link is displayed', function () {
    expect(topMenuPage.diaryLink.isDisplayed());
  });

  it('Groups Link is displayed', function () {
    expect(topMenuPage.groupsLink.isDisplayed());
  });

  it('Users Link is displayed', function () {
    expect(topMenuPage.usersLink.isDisplayed()).false;
  });

  it('Challenges Link is displayed', function () {
    expect(topMenuPage.challengesLink.isDisplayed()).false;
  });

  it('Telephony Link is displayed', function () {
    expect(topMenuPage.telephonyLink.isDisplayed()).false;
  });

  it('Shop Link is displayed', function () {
    expect(topMenuPage.shopLink.isDisplayed());
  });

  it('Orders Link is displayed', function () {
    expect(topMenuPage.ordersLink.isDisplayed()).false;
  });
});

describe('MAIN ELEMENTS ARE DISPLAYED for STUDENT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  it('Base Link is displayed', function () {
    expect(topMenuPage.baseLink.isDisplayed()).false;
  });

  it('Courses Link is displayed', function () {
    expect(topMenuPage.coursesLink.isDisplayed()).false;
  });

  it('Cards Link is displayed', function () {
    expect(topMenuPage.cardsLink.isDisplayed()).false;
  });

  it('Diary Link is displayed', function () {
    expect(topMenuPage.diaryLink.isDisplayed()).false;
  });

  it('Groups Link is displayed', function () {
    expect(topMenuPage.groupsLink.isDisplayed()).false;
  });

  it('Users Link is displayed', function () {
    expect(topMenuPage.usersLink.isDisplayed()).false;
  });

  it('Challenges Link is displayed', function () {
    expect(topMenuPage.challengesLink.isDisplayed()).false;
  });

  it('Telephony Link is displayed', function () {
    expect(topMenuPage.telephonyLink.isDisplayed()).false;
  });

  it('Shop Link is displayed', function () {
    expect(topMenuPage.shopLink.isDisplayed()).false;
  });

  it('Orders Link is displayed', function () {
    expect(topMenuPage.ordersLink.isDisplayed()).false;
  });
});


