module.exports = function displayUserController({ fetchAllUserData }) {
  return async function displayUserControllerAction(req, res) {
    try {
      console.log(req.params.id);
      const data = await fetchAllUserData(req.params.id);
      
      console.log("data is here:- ", data);

      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error);
    }
  };
}
