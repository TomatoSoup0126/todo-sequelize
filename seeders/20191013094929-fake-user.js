'use strict';

const users = require('./fakeUser.json')
const todos = require('./fakeTodo.json')
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Users', null, {}),
      queryInterface.bulkDelete('Todos', null, {}),
    ])
  }
};


