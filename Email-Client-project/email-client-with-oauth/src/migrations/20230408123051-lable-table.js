'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Lables", {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER(20),
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      syncedFolderId: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable("Lables");
  }
};
