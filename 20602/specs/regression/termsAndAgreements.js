import RegisterPage from '../../../pageObjects/register.page';
import TermsAndAgreementsPage from '../../../pageObjects/TermsAndAgreements.page';
import expected from '../../data/expected.json';

before(() => {
  RegisterPage.open();
});

describe('VERIFY TERMS AND CONDITIONS', () => {
  it('TC-007-001 Verify that "Term and Agreements"  link is displayed', function () {
    expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
  });

  it('TC-007-002 Verify than "Term and Agreements" link is clickable ', function () {
    expect(RegisterPage.termsAndAgreementsLink.isClickable()).true;
  });

  it('TC-007-003  Verify that pop-up window has correct header "Terms and agreements" ', function () {
    RegisterPage.termsAndAgreementsLink.click();
    expect(TermsAndAgreementsPage.drawerTitle.getText()).eq(expected.termsAndAgreements.drawerTitle);
  });
});


