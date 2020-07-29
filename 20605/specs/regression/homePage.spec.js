import HomePage from '../../../pageObjects/home.page';
import { homePage } from "../../testResult/homePage";
import { loginPage } from "../../testResult/login";
import { registerPageTestResult } from "../../testResult/register";

describe('HOME PAGE  ELEMENTS', function () {
  before(() => {
    HomePage.open();
  })
  it('header  is displayed', function () {
    expect(HomePage.header.isDisplayed()).true;
  });

  it('header  has the correct text', function () {
    expect(HomePage.header.getText()).eq(homePage.header);
  });

  it('local coding logo is displayed', function () {
    expect(HomePage.homePageLink.isDisplayed()).eq(true);
  });

  it('login button is clickable', function () {
    expect(HomePage.loginLink.isClickable());
  });

  it('header contains "welcome back!" text', function () {
     HomePage.loginLink.click();
     expect(HomePage.header.getText()).eq(loginPage.header);
  });
});

describe('go back to home page and check register button and text on it ', function () {
  before(() => {
    HomePage.open();
  })
  it('register button is clickable', function () {
    expect(HomePage.registerLink.isClickable());
  });

  it('header contains "create an account" text', function () {
    HomePage.registerLink.click();
    expect(HomePage.header.getText()).eq(registerPageTestResult.header);
  });
})