const Joi = require('joi');
// const useCases = require('../use-case');

// const createUserController = require('./create-user-controller');
// const displayUserController = require('./display-user-controller');
// const updateUserController = require('./update-user-controller');
// const deleteUserController = require('./delete-user-controller');

// const displayUserControllerAction = displayUserController({
//   displayUser:useCases.displayUser
// })

// const createUserControllerAction = createUserController({
//   Joi,
//   createUser:useCases.createUser
// })

// const updateUserControllerAction = updateUserController({
//   Joi,
//   updateUser:useCases.updateUser
// })

// const deleteUserControllerAction = deleteUserController({
//   deleteUser:useCases.deleteUser
// })

// module.exports = Object.freeze({
//   displayUserControllerAction,
//   createUserControllerAction,
//   updateUserControllerAction,
//   deleteUserControllerAction
// })

//--------------------------------
const useCases = require('../use-case');

const displayUserController = require('./display-user-controller');
const displayUserControllerAction = displayUserController({
  fetchAllUserData:useCases.fetchAllUserData
})

const createUserController = require('./create-user-controller');
const createUserControllerAction = createUserController({
  createUser: useCases.createUser,
  Joi
})

const updateUserController = require('./update-user-controller');
const updateUserControllerAction = updateUserController({
  updateUser: useCases.updateUser,
  Joi
})

const deleteUserController = require('./delete-user-controller');
const deleteUserControllerAction = deleteUserController({
  deleteUser: useCases.deleteUser
})

module.exports = Object.freeze({
  displayUserControllerAction,
  createUserControllerAction,
  updateUserControllerAction,
  deleteUserControllerAction
})