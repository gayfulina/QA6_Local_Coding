import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../../20610/data/expected.json';
import { newUser } from '../../data/fakeData';

describe('NEW USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('UR01 should have correct h1', () => {
    expect(RegisterPage.headerRegister.getText()).eq(expected.newUser.h1);
  });

  it('UR02 should register user', function () {
    RegisterPage.registerUser(newUser);
    expect(RegisterStep2Page.headerRegisterStep2.getText())
    .eq(expected.newUserStep2.h5firstPart + ` ${newUser.firstName} ${newUser.lastName}!` + expected.newUserStep2.h5secondPart);
  });

});



