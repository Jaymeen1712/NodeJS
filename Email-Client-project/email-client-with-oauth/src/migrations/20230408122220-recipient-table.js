'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable("Recipient", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      messageId: {
        type: Sequelize.INTEGER(20),
        allowNull: false,
        references: {model: 'Emails', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      recipients_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      // type 
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
    // {tableName: 'Users'}
    );
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable("Recipient");
  }
};
