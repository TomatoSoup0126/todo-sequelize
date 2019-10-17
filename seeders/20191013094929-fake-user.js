'use strict';

const users = require('./fakeUser.json')
const todos = require('./fakeTodo.json')
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    users.forEach(user => {
      //雜湊password
      let hash = bcrypt.hashSync(user.password, 10)
      user.password = hash
      user.createdAt = new Date()
      user.updatedAt = new Date()
    })

    todos.forEach(todo => {
      todo.createdAt = new Date()
      todo.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', users)
    await queryInterface.bulkInsert('Todos', todos)
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Users', null, {}),
      queryInterface.bulkDelete('Todos', null, {}),
    ])
  }
};


