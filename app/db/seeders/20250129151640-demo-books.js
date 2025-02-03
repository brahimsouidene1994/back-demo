'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book', [
      {
        title: 'The Lost Kingdom',
        author: 'Emily Carter',
        genre: 'Fantasy',
        price: 12.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Code to Success',
        author: 'James Anderson',
        genre: 'Self-Help',
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Adventures in the Stars",
        author: "William Cooper",
        genre: "Science Fiction",
        price: 15.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Cooking Made Simple",
        author: "Olivia Harris",
        genre: "Cookbook",
        price: 15.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Art of Silence",
        author: "Michael Davis",
        genre: "Philosophy",
        price: 20.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Forgotten Soldier",
        author: "Emma Roberts",
        genre: "Historical Fiction",
        price: 18.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Hacker Chronicles",
        author: "Liam Carter",
        genre: "Thriller",
        price: 22.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Gardening for All Seasons",
        author: "Grace Walker",
        genre: "Lifestyle",
        price: 10.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Legends of the Highlands",
        author: "Noah Scott",
        genre: "Historical Adventure",
        price: 14.49,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book', null, {});

  }
};