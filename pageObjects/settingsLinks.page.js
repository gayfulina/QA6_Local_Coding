import BasePage from './Base.page';
// import TopMenuPage from './topMenu.page';

class LinksPage extends BasePage {

  get linksTab() {
    return $$('.ant-menu-item')[3];
  }

  get resumeLabel() {
    return $('[for="resume"]');
  }

  get resumeField() {
    return $('#resume');
  }

  get linkedInLabel() {
    return $('[for="linkedIn"]');
  }

  get linkedInField() {
    return $('#linkedIn');
  }

  get facebookLabel() {
    return $('[for="facebook"]');
  }

  get facebookField() {
    return $('#facebook');
  }

  get gitHubLabel() {
    return $('[for="github"]');
  }

  get gitHubField() {
    return $('#github');
  }

  get codewarsLabel() {
    return $('[for="codewarsUsername"]');
  }

  get codewarsField() {
    return $('#codewarsUsername');
  }

  get saveLinksBtn() {
    return $('[type="submit"]');
  }

  saveLinks() {
    this.saveLinksBtn.click();
  }
}
export default new LinksPage();