const con = require("../database-connection");
module.exports = function deleteUserController({deleteUser}) {
  return function deleteUserControllerAction(req, res) {
    const deletedb = deleteUser();
    console.log(deleteUser());
    console.log(deletedb);
    let userInfo = deletedb(con, req.params.id);
    console.log(userInfo)
    console.log("hihihihih");
    res.status(200).json({
      status: "success",
      data: "deleted"
    });
  };
};
