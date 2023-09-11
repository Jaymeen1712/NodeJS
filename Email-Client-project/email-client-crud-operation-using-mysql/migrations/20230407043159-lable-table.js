'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Lables", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER(20),
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      syncedFolderId: {
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
    return queryInterface.dropTable("Lables");
  }
};
