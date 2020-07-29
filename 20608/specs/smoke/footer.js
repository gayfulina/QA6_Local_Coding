import { expect } from 'chai';
import FooterPage from '../../../pageObjects/footer.page';
const expectedContactUs = require ('../../../20608/data/expected.json').contactUsPage;
const expectedTerms = require ('../../../20608/data/expected.json').termsOfServicePage;
const expectedPrivacy = require ('../../../20608/data/expected.json').privacyPolicyPage;

describe('FOOTER FUNCTIONAL', () => {
  before(() => {
    FooterPage.open();
    browser.maximizeWindow();
  });

  it('check footer text ', () => {
    expect(FooterPage.footer.getText()).eq(
      'If you have any questions or concerns, please contact us.\n' + 'Terms of Service Privacy Policy',
    );
  });

  it('should navigate to contact us page', function() {
    FooterPage.navToContactUs();
    expect(FooterPage.header.getText()).eq(expectedContactUs.header);
  });

  it('should navigate to terms of service page', function() {
    FooterPage.navToTermsOfService();
    expect(FooterPage.header.getText()).eq(expectedTerms.header);
  });

  it('should navigate to privacy policy page', function() {
    FooterPage.navToPrivacyPolicy();
    FooterPage.privacyPolicy.scrollIntoView();
    expect(FooterPage.header.getText()).eq(expectedPrivacy.header);
  });
});
