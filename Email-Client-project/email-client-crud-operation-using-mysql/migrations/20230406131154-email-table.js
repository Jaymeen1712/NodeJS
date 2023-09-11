"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Emails",
      {
        messageid: {
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
        },
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
        },
        threadid: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        subject: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        userid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Users', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        htmlbody: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        textbody: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        snippet: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        isreplay: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        isread: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        refrences: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        
      },
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Emails");
  },
};
