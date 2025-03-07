'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn('book', 'cover', {
          type: Sequelize.STRING,
          allowNull: true,
        });
        
        await queryInterface.addColumn('book', 'description', {
          type: Sequelize.TEXT,
          allowNull: true,
        });
      },
    
      async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn('book', 'cover');
        await queryInterface.removeColumn('book', 'description');
      }
};
