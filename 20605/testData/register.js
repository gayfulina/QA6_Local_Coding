const newUser = {
  firstName: 'FirstName',
  lastName: 'LastName',
  phone: '17775551122',
  email: `${Math.random().toFixed(10)}@gmail.com`,
  password: 'abc123',
};

const negativeRegisterStep1 = {
  invalidName: ['123', 'aa aa', 'a!#$%', `${'a'.repeat(21)}`],
  oneLetter: 'a',
  invalidEmail1: ['newqa6.us', 'new@qa6us', 'n@ew@qa6.us', 'new@q,a6.us', 'new@qa6.us%', '@qa6.us'],
  invalidPassword: '12',
};

const inputRegisterStep1 = {
    firstLastNameMin: 'A',
    firstLastNameMax: `${'a'.repeat(20)}`,
    firstLastName3: 'a\'sssa-',
    email: 'Asdfgh@mail.us',
    password: 'Azxcvb@123'
}

const negativeRegisterStep2 = {
    invalidPhoneNumberMin: `${'5'.repeat(9)}`,
    invalidPhoneNumberMax: `${'5'.repeat(12)}`,
    symbolsInvalidPhoneNumber: `${'#'.repeat(10)}`,
    lettersUppInvalidPhoneNumber: `${'C'.repeat(12)}`,
    lettersLowerInvalidPhoneNumber: `${'a'.repeat(10)}`,
    invalidPhoneNumberBackSpace: `${' '.repeat(10)}`,
    invalidPhoneNumberEmpty: ''
};

export {newUser, inputRegisterStep1, negativeRegisterStep1, negativeRegisterStep2}
