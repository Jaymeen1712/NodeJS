'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Attachments", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      attachmentId: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      size: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    },
    );
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable("Attachments");
  }
};
