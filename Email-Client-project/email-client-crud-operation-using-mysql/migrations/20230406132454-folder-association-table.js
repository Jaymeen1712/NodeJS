'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("EmailFolderAssociation", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      messageid: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {model: 'Emails', key: 'messageid'},
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    },
    // {tableName: 'Users'}
    );
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable("EmailFolderAssociation");
  }
};
