'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('Attachments', [{
      attachmentId: "78283",
      path: "jkidjikf",
      type: "to",
      size: "120",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Attachments', {
      attachmentId: "78283",
    });
  }
};

