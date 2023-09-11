
module.exports = function createLableController({ createLable, Joi }) {
  return async function createLableControllerAction(req, res) {

    console.log("\n\n create-lable-controller.js was called\n\n");

    const name = req.body.name;
    const id = req.params.id;
    const syncedFolder_id = req.params.syncedFolder_id;
    const priority = req.params.priority;
    try {
      const validation = isValid({ id, name });

      const ans = await createLable(validation.id, validation.name);
      if (ans[0] > 0) {
        res.status(201).send({
          status: "success",
          id: ans[1]
        });
      } else {
        throw "lable already exist";
      }
    } catch (err) {
      res.status(404).send({ error: err });
    }
  };

  // JOI VALIDATION FUNCTION
  function isValid({ id, name, syncedFolder_id, priority }) {
    
    console.log("\n\n create-lable-controller.js joi validation function was called\n\n");

    const schemass = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required()
    });
    const { value, error } = schemass.validate({ id, name, syncedFolder_id, priority });
    if (error) {
      throw (error.details[0].message);
    } else {
      return value
    }
  }
}