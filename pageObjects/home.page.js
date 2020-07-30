import BasePage from './Base.page';

class HomePage extends BasePage {
    open() {
        super.open('/');
    }

    get registerLink () {
        return $('[href="/user/register"]');
    }
    get loginLink () {
        return $('[href="/user/login"]');
    }

}
export  default new HomePage();
