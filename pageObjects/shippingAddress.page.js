import BasePage from "./Base.page";
import LoginPage from "./login.page.js";
import user from '../testData/user';
import TopMenuPage from './topMenu.page';
import users from '../20602/data/users';
import ProfilePage from './profile.page';

class ShippingAddressPage extends BasePage{
    get fullNameLabel() {
        return $('[for="fullName"]');
    }

    get fullNameField() {
        return $('#fullName');
    }

    get countryLabel() {
        return $('[for="countryName"]');
    }

    get countryField() {
        return $('#countryName');
    }

    get streetAddressLabel() {
        return $('[for="address"]');
    }

    get streetAddressField() {
        return $('#address');
    }

    get cityLabel() {
        return $('[for="city"]');
    }

    get cityField() {
        return $('#city');
    }

    get stateProvinceLabel() {
        return $('[for="state"]');
    }

    get stateProvinceField() {
        return $('#state');
    }

    get postalCodeLabel() {
        return $('[for="zipCode"]');
    }

    get postalCodeField() {
        return $('#zipCode');
    }

    get contactPhoneLabel() {
        return $('[for="contactPhone"]');
    }

    get contactPhoneField() {
        return $('#contactPhone');
    }

    get contactPhonePrefix() {
        return $('.ant-input-prefix');
    }

    get contactPhoneFieldNote() {
        return $('.ant-form-item-extra');
    }

    get saveAddressBtn() {
        return $('[type="submit"]');
    }

    get shippingAddressLink() {
        return $('//li[text()="Shipping address"]');
    }

    get countryValues(){
        return $$('//div[@id="countryName_list"]/div');
    }

    get stateProvinceValues(){
        return $$('//div[@id="state_list"]/div');
    }

    goToShippingAddressPageAsAdmin() {
        LoginPage.open();
        LoginPage.login(user.admin.email, user.admin.password);
        ProfilePage.dropDownUserMenu.click();
        TopMenuPage.dropDownMenuSettings.click();
        this.shippingAddressLink.click();
    }

    selectRandomCountry() {
        const l = this.countryValues.length;
        const n = Math.floor(Math.random() * l);
        this.countryField.setValue(`${countryValues[n].getText()}`);
    }

    selectRandomStateProvince() {
        this.stateProvinceValues.length;
        const n = Math.floor(Math.random() * l);
        this.stateProvinceField.setValue(`${stateProvinceValues[n].getText()}`);
    }

    submitShippingAddress() {
        this.fullNameField.setValue(`${user.admin.firstName} ${user.admin.lastName}`);
        this.selectRandomCountry();
        this.streetAddressField.setValue(`${users.shippingStreetAddress}`);
        this.cityField.setValue(`${users.shippingCity}`);
        this.selectRandomStateProvince();
        this.postalCodeField.setValue(`${users.shippingPostalCode}`);
        this.contactPhoneField.setValue(`${users.shippingContactPhone}`);
        this.saveAddressBtn.click();
    }
}

export default new ShippingAddressPage();