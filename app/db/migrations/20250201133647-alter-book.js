'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('book','price' ,
      { 
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('book','price');
  }
};
