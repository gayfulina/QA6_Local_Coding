const faker = require('faker');

const email = Math.random().toFixed(6) + '@gmail.com';

const textStep1 = {
  homePageHeader: 'Home Page',
  header: 'Create an account',
};

const textStep2 = {
  header: 'Please complete these fields',
};

const textLogin = {
  header: 'Welcome back!',
  email: 'Email',
  password: 'Password'
};

const data = {
  firstName: 'Test',
  lastName: 'Test',
  email,
  password: 'abc123',
};

const userStep2 = {
  country: 'United States',
  phone: '17775551122',
};

const Admin = {
  emailAdmin: 'adminqa6@admin.us',
  passwordAdmin: '123123',
};

const newUser = {
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  email: faker.internet.email,
  password: faker.nternet.password,
  phone: faker.phone.phoneNumber
}


export { textStep1, textLogin, textStep2, userStep2, Admin, data, newUser };