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
    await queryInterface.bulkInsert('enrollments', [
      {
        status: 'active',
        start_date: new Date(),
        student_id: 1,
        course_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'active',
        start_date: new Date(),
        student_id: 1,
        course_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'active',
        start_date: new Date(),
        student_id: 2,
        course_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('enrollments', null, {});
  }
};
