'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('Emails', [{
      messageid: "189839849",
      id: 1,
      threadid: "7787359uu9893",
      subject: "jsid",
      userid: 1,
      htmlbody: "oasdjffoo",
      textbody: "jasodiju",
      snippet: "hi abc",
      isreplay: "hi",
      isread: "yes",
      refrences: "abc",   
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Emails', {
      messageid: "189839849"
    });
  }
};

