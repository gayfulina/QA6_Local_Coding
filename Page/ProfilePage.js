import BasePage from "./BasePage";

class ProfilePage extends BasePage{
  get header(){ return $('h1')}

  get badge() {
    return $('.ant-badge');
  }

  getLoginConfirmation() {
    return this.header.getText();
  }
}

export default new ProfilePage()