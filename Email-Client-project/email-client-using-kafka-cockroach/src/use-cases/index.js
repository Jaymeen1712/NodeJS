const Joi = require("joi");
const { makeUserTemplate, makeLableTemplate } = require('../entities')

const { dataAccessUserFunction, dataAccessLableFunction, cockroach } = require("../data-access");

// const {
//   // read,
//   create,
//   // update,
//   deletedb,
//   // paginateUsersdb
// } = require("../data-access/crud-operation");

// lable
const addLableFunction = require("./add-lable");
const createLable = addLableFunction({ dataAccessLableFunction, Joi, makeLableTemplate });

const getLableFunction = require("./get-lable");
const getLable = getLableFunction({ dataAccessLableFunction, Joi })

const deleteLableFunction = require("./delete-lable")
const deleteLable = deleteLableFunction({ dataAccessLableFunction, Joi });

const updateLableFunction = require("./update-lable")
const updateLable = updateLableFunction({ dataAccessLableFunction, Joi, makeLableTemplate });

// user
const FetchAllUserDataFunc = require("./display-user");
const fetchAllUserData = FetchAllUserDataFunc({ read: dataAccessUserFunction.read, getLable, Joi });

const createUserFunc = require("./create-user");
const createUser = createUserFunc({ create: dataAccessUserFunction.create, createLable, Joi, makeUserTemplate });

const updateUserFunc = require("./update-user");
const updateUser = updateUserFunc({ update: dataAccessUserFunction.update, Joi, makeUserTemplate });

const deleteUserFunc = require("./delete-user");
const deleteUser = deleteUserFunc({ deletedb: dataAccessUserFunction.deletedb });

const paginateUsersFunction = require("./paginate-user");
const paginateUsers = paginateUsersFunction({ paginateUsersdb: dataAccessUserFunction.paginateUsersdb, getLable, Joi });

module.exports = Object.freeze({
  // user
  fetchAllUserData,
  createUser,
  updateUser,
  deleteUser,
  paginateUsers,

  //lable
  createLable,
  deleteLable,
  updateLable,
  getLable
});
