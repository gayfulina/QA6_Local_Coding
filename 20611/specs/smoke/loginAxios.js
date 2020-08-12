import RegisterPage from '../../../pageObjects/register.page';
import { tempUser, newUser } from '../testData/users';
const host = 'https://server-stage.pasv.us';
const axios = require('axios');
import { userGetByEmail, loginNewUser } from '../../../helpers/apiFunctions';

before(() => {
  RegisterPage.open();
  RegisterPage.registerUser(tempUser);
  console.log(process.env.ADMIN_TOKEN);
});

describe('LOGIN', () => {
  it('Login new user', async () => {
    it('API check the new user', async () => {
      const newUser = await loginNewUser(tempUser.email, tempUser.password);
      console.log(process.env.USERNEW_TOKEN);
      console.log(process.env.USERNEW_ID);
      expect(newUser.success).true;
    });

    it('Api check the new user', async () => {
      const user = await userGetByEmail(tempUser);
      console.log(user);
      expect(user.payload.name).eq(`${tempUser.firstName} ${tempUser.lastName}`);
    });
  });
});
