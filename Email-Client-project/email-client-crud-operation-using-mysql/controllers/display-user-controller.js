const con = require("../database-connection");
module.exports = function displayUserController({fetchAllUserData}) {
  return function displayUserControllerAction(req, res) {
    const fetchdb = fetchAllUserData();
    console.log(fetchAllUserData());
    console.log(fetchdb);
    let userInfo = fetchdb(con);
    console.log(userInfo)
    console.log("hihihihih");
    res.status(200).json({
      status: "success",
      data: req.body
    });
  };
};
