'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Attachments", {
      // name
      // massege_id fk
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      attachmentId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
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
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    },
    // {tableName: 'Users'}
    );
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable("Attachments");
  }
};
