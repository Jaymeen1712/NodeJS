module.exports = function FetchAllUserDataFunc({fetchdb}) {
  return function fetchAllUserData() {
    // const result = crudOperation(con);
    return fetchdb;
  }
}