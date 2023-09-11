const Joi = require("joi");
const con = require('../database-connection');
const {fetchdb, createdb, updatedb, deletedb} = require('../data-access/crud-operation');

const FetchAllUserDataFunc = require('./display-user');
const createUserFunc = require('./create-user');
const updateUserFunc = require('./update-user');
const deleteUserFunc = require('./delete-user');

const fetchAllUserData = FetchAllUserDataFunc({fetchdb});
const createUser = createUserFunc({createdb, Joi});
const updateUser = updateUserFunc({updatedb, Joi});
const deleteUser = deleteUserFunc({deletedb, Joi});
 
module.exports = {
  fetchAllUserData,
  createUser,
  updateUser,
  deleteUser
}
