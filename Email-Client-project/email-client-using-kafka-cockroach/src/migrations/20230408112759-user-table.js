'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
          type: Sequelize.STRING(32),
          allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      accessToken: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      refreshToken: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      photo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updateddAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("Users");
  }
};
