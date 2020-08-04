import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import LinksPage from '../../../pageObjects/links.page';
import { linksSettings } from '../../testResult/linksSettings';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('LINKS ARE DISPLAYED AND HAVE CORRECT TEXT', function () {
  it('LinksTab should be displayed', function () {
    expect(LinksPage.linksTab.isDisplayed());
  });

  it('LinksTab has correct text', function () {
    expect(LinksPage.linksTab.getText()).eq(linksSettings.linksTab);
  });

  it('ResumeLabel should be displayed', function () {
    expect(LinksPage.resumeLabel.isDisplayed());
  });

  it('ResumeLabel has correct text', function () {
    expect(LinksPage.resumeLabel.getText()).eq(linksSettings.resumeLabel);
  });

  it('LinkedinLabel should be displayed', function () {
    expect(LinksPage.linkedInLabel.isDisplayed());
  });

  it('LinkedinLabel has correct text', function () {
    expect(LinksPage.linkedInLabel.getText()).eq(linksSettings.linkedinLabel);
  });

  it('FacebookLabel should be displayed', function () {
    expect(LinksPage.facebookLabel.isDisplayed());
  });

  it('FacebookLabel has correct text', function () {
    expect(LinksPage.facebookLabel.getText()).eq(linksSettings.facebookLabel);
  });

  it('GitHubLabel should be displayed', function () {
    expect(LinksPage.gitHubLabel.isDisplayed());
  });

  it('GitHubLabel has correct text', function () {
    expect(LinksPage.gitHubLabel.getText()).eq(linksSettings.gitHubLabel);
  });

  it('CodewarsLabel should be displayed', function () {
    expect(LinksPage.codewarsLabel.isDisplayed());
  });

  it('CodewarsLabel has correct text', function () {
    expect(LinksPage.codewarsLabel.getText()).eq(linksSettings.codewarsLabel);
  });

  it('SaveBtn should be displayed', function () {
    expect(LinksPage.saveLinksBtn.isDisplayed());
  });

  it('SaveBtn has correct text', function () {
    expect(LinksPage.saveLinksBtn.getText()).eq(linksSettings.saveLinkBtn);
  });

});
