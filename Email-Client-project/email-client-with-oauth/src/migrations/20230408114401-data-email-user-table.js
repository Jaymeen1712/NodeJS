'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  ( queryInterface.bulkInsert('Emails', [{
      id: 1,
      messageId: "189839849",
      threadId: "7787359uu9893",
      subject: "hi",
      userId: 1,
      htmlBody: "h1h2",
      textBody: "hihello",
      snippet: "hi",
      isReplay: "ues",
      isRead: "yes",
      refrences: "abc",   
    }
  ]))
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Emails', {
      messageId: "189839849"
    });
  }
};
