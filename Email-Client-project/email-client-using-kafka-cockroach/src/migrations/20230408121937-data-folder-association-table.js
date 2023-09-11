'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ( queryInterface.bulkInsert('folders', [{
      
      messageid: "189839849",
      userid: 1,
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('folders', {
      userId: 1,
    });
  }
};
