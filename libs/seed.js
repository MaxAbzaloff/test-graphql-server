require('dotenv').config();

const fs = require('fs');
const path = require('path');
const faker = require('faker');

let accountsAmount = process.env.SEED_ACCOUNTS_AMOUNT;

module.exports = (function () {
  const accounts = [];

  while (accountsAmount > 0 ) {
    const chunk = {
      id: faker.random.uuid(),
      lastname: faker.name.lastName(),
      firstname: faker.name.firstName(),
      middlename: faker.name.firstName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      url: faker.internet.url()
    }

    accounts.push(chunk);
    accountsAmount--;
  }

  fs.writeFileSync(path.resolve(__dirname, '../db/seedData.json'), JSON.stringify({
    accounts
  }));
})();
