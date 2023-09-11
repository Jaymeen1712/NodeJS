'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await  ( queryInterface.bulkInsert('Attachments', [{
      attachmentId: "78283",
      path: "jkidjikf",
      type: "to",
      size: "120",
    }
  ]))
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attachments', {
      attachmentId: "78283",
    });
  }
};

