const userNew = {
  email: Math.floor(Math.random() * 10000) + 'test@gmail.com',
  password: '123123',
  firstName: 'test',
  lastName: 'testovich',
  phone: '1234567890',
  headerName: 'test testovich',

}
const headers = {
  headerRegister : 'Create an account',
  headerStep2Page: 'Dear test testovich!\nPlease complete these fields',
}


module.exports = {headers, userNew};