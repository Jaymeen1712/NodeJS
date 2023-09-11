'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return  ( queryInterface.bulkInsert('Users', [{
      username: "Amit",
      useremail: "amit@gmial.com",
      access_token: "anldjfaosdfjaosdlfkaosdijfaosd",
      refresh_token: "asdkjffdakjdsfoasdfla",
      photo: "aksdjfofasjdfoasijdfa",      
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      username: "Amit",
    });
  }
};

