'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING(32),
          allowNull: false,
          unique: true
      },
      useremail: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      access_token: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      refresh_token: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      photo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    },
    // {tableName: 'Users'}
    );
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable("Users");
    
  }
};
