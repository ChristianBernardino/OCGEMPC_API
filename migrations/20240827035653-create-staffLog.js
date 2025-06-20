'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('staff_logs',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      action: {
      type: Sequelize.ENUM(
        'login', 'logout', 'create loan', 'approve loan', 'decline loan', 'deleted loan', 'updated loan',
        'update insurance', 'delete insurance', 'update maker', 'delete maker'
      ),
      allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      related_data: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staff_logs');
  }
};
