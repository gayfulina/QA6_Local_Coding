import BasePage from './../pageObjects/Base.page';

class ContactUsPage extends BasePage {
  get headerContactUs() {
    return $('h1');
  }
}
export default new ContactUsPage();
