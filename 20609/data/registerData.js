import faker from 'faker';

const email = faker.internet.email();
const userNew = {
  email,
  password: '123123',
  firstName: 'test',
  lastName: 'testovich',
  phone: '1234567890',
  headerName: 'test testovich'
};

const headers = {
  headerRegister : 'Create an account',
  headerStep2Page: 'Dear test testovich!\nPlease complete these fields',
}


module.exports = {headers, userNew};