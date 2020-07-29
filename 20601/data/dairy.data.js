import faker from 'faker';

const randomSelectorElements = {
  morale: faker.random.number(10),
  hours: faker.random.number({ min: 11, max: 21 }),
};

export default randomSelectorElements;
