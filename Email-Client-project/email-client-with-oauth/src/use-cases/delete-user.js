module.exports = function deleteUserFunc({ deletedb }) {
  return async function deleteUserData({ id }) {

    console.log("\n\n delete-user.js --usecase-- was called");
    
    const valueOfDeletedb = await deletedb({ id });
    if (valueOfDeletedb.rowCount > 0) {
      return "deleted";
    }
    else {
      throw ("no user exist");
    }
  };
};
