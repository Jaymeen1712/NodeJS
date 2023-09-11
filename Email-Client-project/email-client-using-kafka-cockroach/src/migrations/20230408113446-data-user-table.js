'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  ( queryInterface.bulkInsert('Users', [{
      userName: "Amit",
      userEmail: "amit@gmial.com",
      accessToken: "anldjfaosdfjaosdlfkaosdijfaosd",
      refreshToken: "asdkjffdakjdsfoasdfla",
      photo: "abc.png",      
    }
  ]))
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      id:1,
    });
  }
};
