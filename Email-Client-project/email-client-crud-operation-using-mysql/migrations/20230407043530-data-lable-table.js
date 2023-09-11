'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('Lables', [{
      
      userId: 1,
      name: "abc",
      syncedFolderId: "6476374",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lables', {
      id: "1"
    });
  }
};

