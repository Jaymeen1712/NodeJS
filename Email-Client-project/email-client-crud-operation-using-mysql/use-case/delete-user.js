module.exports = function deleteUserFunc({deletedb}) {
  return function deleteUserData() {
    // const result = crudOperation(con);
    return deletedb;
  }
}