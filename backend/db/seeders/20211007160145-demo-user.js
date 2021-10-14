'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jacklin@user.io',
        username: 'Jack Lin',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'andrenguyen@user.io',
        username: 'Andre Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'andrekimpham@user.io',
        username: 'Andre Kim Pham',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'lucaschung@user.io',
        username: 'Lucus Chung',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'vinhnguyen@user.io',
        username: 'Vinh Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'reneehoang@user.io',
        username: 'Renee Hoang',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'test@user.io',
        username: 'test',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Jack Lin', 'FakeUser1', 'FakeUser2'] },
    }, {});
  }
};