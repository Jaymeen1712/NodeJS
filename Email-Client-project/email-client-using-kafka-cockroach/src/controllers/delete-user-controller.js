module.exports = function deleteUserController({ deleteUser }) {
  return async function deleteUserControllerAction(req, res) {
    try {
      console.log("controller called : - \n\n\n\n");
      const deletedb = await deleteUser({ id: req.params.id });
      console.log("deletedb value is here:-", deletedb )
      res.status(200).send(deletedb);
    } catch (error) {
      res.status(404).send(error);
    }
  };
};
