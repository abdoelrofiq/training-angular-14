'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'MacBook Air M2',
        price: 18000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Keyboard Mechanical',
        price: 750000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monitor 27 Inch IPS',
        price: 2500000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
