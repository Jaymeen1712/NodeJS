module.exports = function displayUserController({ fetchAllUserData }) {
  return async function displayUserControllerAction(req, res) {
    try {

      console.log("\n\n display-user-controller.js was called\n\n");

      const data = await fetchAllUserData(req.params.id);
      
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error);
    }
  };
}
