'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jacklin@demouser.io',
        username: 'Jack Lin',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureJackLin.jpeg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverJackLin.jpeg',
      },
      {
        email: 'andrenguyen@user.io',
        username: 'Andre Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureAndreNguyen.jpeg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverAndreNguyen.jpeg',
      },
      {
        email: 'andrekimpham@user.io',
        username: 'Andre Kim Pham',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureAndreKimPham.jpg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverAndreKimPham.jpeg',
      },
      {
        email: 'lucaschung@user.io',
        username: 'Lucus Chung',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureLucasChung.jpeg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverLucasChung.jpeg',
      },
      {
        email: 'vinhnguyen@user.io',
        username: 'Vinh Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureVinhNguyen.jpeg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverVinhNguyen.jpeg',
      },
      {
        email: 'reneehoang@user.io',
        username: 'Renee Hoang',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/ProfilePictureReneeHoang.jpeg',
        coverImageUrl: 'https://veilr.s3.us-west-1.amazonaws.com/Profile+/CoverReneeHoang.jpeg',
      },
      {
        email: 'test@user.io',
        username: 'test',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: '',
        coverImageUrl: '',
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: '',
        coverImageUrl: '',
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: '',
        coverImageUrl: '',
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