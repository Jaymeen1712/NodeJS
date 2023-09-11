'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Recipient", {
      // type cc bcc 
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
      emailaddress: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    },
    // {tableName: 'Users'}
    );
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable("Recipient");
  }
};
