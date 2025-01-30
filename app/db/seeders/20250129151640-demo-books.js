'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book', [
      {
        title: 'Gardening for All Seasons',
        author: 'Grace Walker',
        genre: 'Lifestyle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Legends of the Highlands',
        author: 'Noah Scott',
        genre: 'Historical Adventure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book', null, {});

  }
};
