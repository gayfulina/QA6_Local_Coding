import FooterPage from '../../../pageObjects/footer.page';
import { footer } from '../testData/expected.json';

describe('FOOTER FUNCTIONALITY', () => {
  before(() => {
    FooterPage.open();
    browser.maximizeWindow();
  });

  it('should Check footer text', () => {
    expect(FooterPage.footer.getText()).eq(footer.footerText);
  });

  it('should Navigate to contact us page', function () {
    FooterPage.navToContactUs();
    expect(FooterPage.header.getText()).eq(footer.contactUsPage);
  });

  it('should Navigate to terms of service page', function () {
    FooterPage.navToTermsOfService();
    expect(FooterPage.header.getText()).eq(footer.termsOfServicePage);
  });

  it('should Navigate to privacy policy page', function () {
    FooterPage.navToPrivacyPolicy();
    expect(FooterPage.header.getText()).eq(footer.privacyPolicyPage);
  });
});
