'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('EmailFolderAssociation', [{
      
      messageid: "189839849",
      userid: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmailFolderAssociation', {
      messageid: "189839849"
    });
  }
};

