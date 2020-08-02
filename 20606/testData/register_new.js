
import faker from 'faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();
const phone = 9165338877;
  // faker.phone.phoneNumber();

const registerNew = {
  firstName,
  lastName,
  email,
  password,
  phone
};

export {registerNew};

