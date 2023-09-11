'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Emails",
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        messageId: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        threadId: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        subject: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: { model: 'Users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        htmlBody: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        textBody: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        snippet: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        isReplay: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        isRead: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        refrences: {
          type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("Emails");
  }
};
