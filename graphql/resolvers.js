const db = require('../db')
const faker = require('faker')

const dbCopy = Array.from(db.data.accounts);

var root = {
  getAccounts: (input) => {

    const { page, perPage } = input;

    const arr = Array.from(dbCopy);
    console.log(dbCopy.length)

    return {
      pagesAmount: Math.ceil(arr.length/perPage),
      accounts: arr.splice((page - 1) * perPage, perPage)
    }
  },
  removeAccount: (input) => {

    console.log(input);
    const { id } = input.account;

    const index = dbCopy.findIndex(value => value.id === id)

    if (index < 0) {
      return {
        message: 'Element was not found',
        hasError: true,
        id
      }
    }

    dbCopy.splice(index, 1);
    console.log(dbCopy.length)

    return {
      id,
      message: 'Element has been successfully removed',
      hasError: false
    }
  },
  addAccount: (input) => {

    console.log(input)

    // const id = faker.random.uuid()
    const newAccount = {
      ...input.account,
      id: faker.random.uuid()
    }

    dbCopy.push(newAccount)

    // dbCopy.push({
    //   ...input.account,
    //   id
    // })

    return newAccount
    // return {
    //   ...input.account,
    //   id
    // }
  }
};

module.exports = root
