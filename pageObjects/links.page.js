import BasePage from './Base.page';

class linksPage extends BasePage {

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

}