import faker from 'faker';
export const dailyReport = {
  howWasYourDayTextTC220: 'First daily report First daily report First daily report',
  howWasYourDayTextTC221: 'Second daily report  Second daily report Second daily report',
  howWasYourDayTextTC222: 'Third daily report Third daily report Third daily report',
  moraleLevel: '10 – I am pleased with everything!',
  tagText: 'I need help',
  dailyReportText: faker.random.words(20),
  moraleSelectorIndex: faker.random.number(10),
  hoursSelectorIndex: faker.random.number({ min: 11, max: 21 }),
  };

