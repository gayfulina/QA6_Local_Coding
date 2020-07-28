
const userAdmin = {
  email : 'admin555@gmail.com',
  password : '123123',
  headerAdmin : 'admin adminovich'
}

const userNew = {
  email: Math.floor(Math.random() * 1000) + 'test@gmail.com',
  password: '123123',
  firstName: 'test',
  lastName: 'testovich',
  phone: '1234567890',
  headerName: 'test testovich',

}

const student = {
  firstName: 'Mary',
  lastName: 'Mary',
  name: "Mary Mary",
  email: 'mary@yahoo.com',
  password: 'marymary',
  passwordNew: 'marymary111',
}



module.exports = {userAdmin, userNew, student};