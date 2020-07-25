import BasePage from "./../pageObjects/Base.page";


class RegisterPage extends BasePage {
    get headerRegister() {
        return $('h1');
    }

    get firstNameInput() {
        return $('#user_login_firstName')
    }

    get lastNameInput() {
        return $('#user_login_lastName')
    }

    get email() {
        return $('#user_login_email')
    }

    get password() {
        return $('#user_login_password')
    }

    get TandAlink() {
        return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm')
    }

    get TandAlinkClose() {
        return $('[data-icon="close"]')
    }

    get agreement() {
        return $('#user_login_agreement')
    }

    get registerBtn() {
        return $('.ant-btn.ant-btn-primary.ant-btn-lg')
    }

    get countryDropdown() {
        return $$('.ant-select-item-option-content')[2];

    }
    get openDropdown(){
        return  $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow');
    }
    get phoneNumber() {
        return $('#user_login_phone')
    }

    get SubmitBtn() {
        return $('.ant-btn.ant-btn-primary.ant-btn-lg')
    }

    termsAndAgreements() {
        this.agreement.click();
        this.TandAlink.click();
        this.TandAlinkClose.waitForDisplayed();
        this.TandAlinkClose.click();
    }
    registerUser(data) {
        this.firstNameInput.setValue(data.firstName);
        this.lastNameInput.setValue(data.lastName);
        this.email.setValue(data.email);
        this.password.setValue(data.password);
        this.termsAndAgreements();
        this.registerBtn.click();
        this.openDropdown.click();
        this.countryDropdown.click();
        this.phoneNumber.setValue(data.phone);
        this.SubmitBtn.click();

    }

    open(path) {
        return super.open('user/register');
    }

}export default new RegisterPage();