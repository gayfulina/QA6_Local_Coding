const email = Math.random().toFixed(10) + '@gmail.com';

const registration = {
  title: 'Local Coding',
  header: 'Create an account',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
};

const user = {
  firstName: 'Test',
  lastName: 'Test',
  email: email,
  incorrectEmail: 'test@gmailcom',
  incorrectPhone: '123456789',
  password: 'abc123',
  phone: '9048483838',
};

export { registration, user };
