/**
 * sub page containing specific selectors and methods for a specific page
 */
import BasePage from './Base.page';

class SecurePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $('#flash');
  }
}

export default new SecurePage();
