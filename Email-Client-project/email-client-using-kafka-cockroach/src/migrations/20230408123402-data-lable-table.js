'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ( queryInterface.bulkInsert('Lables', [{
      
      userId: 1,
      name: "INBOX, SEND, STAR, BIN, DELETE",
      syncedFolderId: "6476374",
    }
  ]))
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lables', {
      id: "1"
    });
  }
};

