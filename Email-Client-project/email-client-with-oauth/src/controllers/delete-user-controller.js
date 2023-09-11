module.exports = function deleteUserController({ deleteUser }) {
  return async function deleteUserControllerAction(req, res) {
    try {

      console.log("\n\n delete-user-controller.js was called\n\n");
      
      const deletedb = await deleteUser({ id: req.params.id });
      res.status(200).send(deletedb);
    } catch (error) {
      res.status(404).send(error);
    }
  };
};
