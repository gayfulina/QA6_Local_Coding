const faker = require('faker');

const newUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  about: faker.name.jobArea(),
  email: faker.internet.email(),
  password: "QA" + Math.trunc(new Date().getTime() / 10000) + "!$"

}

export {newUser}
