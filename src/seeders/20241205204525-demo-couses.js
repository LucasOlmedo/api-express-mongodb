'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Node.js',
        description: 'Learning Node.js',
        category_id: 2,
        period: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'React Native',
        description: 'Learning React Native',
        category_id: 1,
        period: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vue.js',
        description: 'Learning Vue.js',
        category_id: 1,
        period: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('courses', null, {});
  }
};
