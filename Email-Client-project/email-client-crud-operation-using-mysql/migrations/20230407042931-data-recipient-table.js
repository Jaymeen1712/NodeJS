'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('Recipient', [{
      
      messageid: "189839849",
      emailaddress: "abc@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipient', {
      emailaddress: "abc@gmail.com"
    });
  }
};

