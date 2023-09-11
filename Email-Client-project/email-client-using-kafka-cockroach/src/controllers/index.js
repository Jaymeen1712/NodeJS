const Joi = require("joi");
const useCases = require("../use-cases");
const { Kafka } = require('kafkajs');

const displayUserController = require("./display-user-controller");
const displayUserControllerAction = displayUserController({
  fetchAllUserData: useCases.fetchAllUserData,
});

const createUserController = require("./create-user-controller");
const createUserControllerAction = createUserController({
  createUser: useCases.createUser,
  Joi,
  Kafka
});

const updateUserController = require("./update-user-controller");
const updateUserControllerAction = updateUserController({
  updateUser: useCases.updateUser,
  Joi
});

const deleteUserController = require("./delete-user-controller");
const deleteUserControllerAction = deleteUserController({
  deleteUser: useCases.deleteUser,
});

const deleteLableController = require("./delete-lable-controller");
const deleteLableControllerAction = deleteLableController({
  deleteLable: useCases.deleteLable,
  Joi
})

const updateLableController = require("./update-lable-controller");
const updateLableControllerAction = updateLableController({
  updateLable: useCases.updateLable,
  Joi
})

const getLableController = require("./get-lable-controller");
const getLableControllerAction = getLableController({
  getLable: useCases.getLable,
  Joi
})

const paginateUsersController = require("./paginate-user-controller");
const paginateUsersControllerAction = paginateUsersController({
  paginateUsers: useCases.paginateUsers,
  Joi
})

module.exports = Object.freeze({

  // user controller action
  displayUserControllerAction,
  createUserControllerAction,
  updateUserControllerAction,
  deleteUserControllerAction,
  paginateUsersControllerAction,

  // lable controller action
  deleteLableControllerAction,
  updateLableControllerAction,
  getLableControllerAction
});
