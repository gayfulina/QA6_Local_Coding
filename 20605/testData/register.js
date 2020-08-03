const newUser = {
  firstName: 'FirstName',
  lastName: 'LastName',
  phone: '17775551122',
  email: `${Math.random().toFixed(10)}@gmail.com`,
  password: 'abc123'
};

const inputRegisterStep1 ={
  firstLastNameMin: 'A',
  firstLastNameMax: `${'a'.repeat(20)}`,
  firstLastName3: 'a\'sssa-',
  email: 'Asdfgh@mail.us',
  password: 'Azxcvb@123'
}

export {newUser, inputRegisterStep1}

