import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import LinksPage from '../../../pageObjects/links.page';
import expected from '../../data/expected.json'

before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();
});

describe('TC-005 LINKS TAB ELEMENTS ARE PRESENT AND DISPLAYED CORRECTLY', () => {

  it('#01 Links Resume Label Text is correct', function() {
    expect(LinksPage.resumeLabel.getText()).eq(expected.linksPageData.resumeText);
  });

  it('#02 Links Resume Field is present', function() {
    expect(LinksPage.resumeField.isDisplayed()).true;
  });

  it('#03 Links LinkedIn Label Text is correct', function() {
    expect(LinksPage.linkedInLabel.getText()).eq(expected.linksPageData.LinkedInText);
  });

  it('#04 Links LinkedIn Field is present', function() {
    expect(LinksPage.linkedInField.isDisplayed()).true;
  });

  it('#05 Links Facebook Label is correct', function() {
    expect(LinksPage.facebookLabel.getText()).eq(expected.linksPageData.FacebookText);
  });

  it('#06 Links Facebook Field is present', function() {
    expect(LinksPage.facebookField.isDisplayed()).true;
  });

  it('#07 Links GitHub Label is correct', function() {
    expect(LinksPage.gitHubLabel.getText()).eq(expected.linksPageData.GitHubText);
  });

  it('#08 Links GitHub Field is present', function() {
    expect(LinksPage.gitHubField.isDisplayed()).true;
  });

  it('#09 Links Codewars Label is correct', function() {
    expect(LinksPage.codewarsLabel.getText()).eq(expected.linksPageData.CodewarsText);
  });

  it('#10 Links Codewars Field is present', function() {
    expect(LinksPage.codewarsField.isDisplayed()).true;
  });

  it('#11 Links Save Button Text is correct', function() {
    expect(LinksPage.saveLinksBtn.getText()).eq(expected.linksPageData.saveBtnText);
  });

  it('#12 Links Save Button is enabled', function() {
    expect(LinksPage.saveLinksBtn.isEnabled()).true;
  });

})
