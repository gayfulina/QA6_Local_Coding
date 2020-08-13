import BasePage from './Base.page';

class DeactivateAccountPage extends BasePage {

  get deactivateAccountTab() {
    return $('//a[contains(@href,"/settings/5f31f5498fea8300ef6b424c/userDeactivation")]');
  }

  get accountDeactivationHeader() {
    return $('h2');
  }

  get textDescription() {
    return $$('.pt-4');
  }

  get deactivateBtn() {
    return $('//span[contains(text(),"Deactivate")]');
  }
}
export default new DeactivateAccountPage()
