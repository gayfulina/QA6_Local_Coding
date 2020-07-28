import BasePage from './Base.page';

class ProfilePage extends BasePage {
  get headerProfile() {
    return $('h1');
  }

  get badge() {
    return $('.ant-badge');
  }

  getLoginConfirmation() {
    return this.headerProfile.getText();
  }

  get dropDownUserMenu() {
    return $('[aria-label="down"]');
  }

  get logoutLink() {
   return $$('.ant-dropdown-menu-item')[2];
  }

  logout() {
    this.dropDownUserMenu.click();
    this.logoutLink.click();
  }
}

export default new ProfilePage();

