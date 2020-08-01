import faker from 'faker';

const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  shippingStreetAddress: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingPostalCode: faker.address.zipCode(),
  shippingContactPhone: faker.random().number({min:100000000, max:9999999999}),
}

const shippingAddressData = {

}


export default user;


