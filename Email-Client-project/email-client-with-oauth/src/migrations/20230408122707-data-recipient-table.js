'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ( queryInterface.bulkInsert('Recipient', [{
      
      emailId: 1,
      emailAddress: "abc@gmail.com",
    }
  ]))
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipient', {
     emailId: 1
    });
  }
};

