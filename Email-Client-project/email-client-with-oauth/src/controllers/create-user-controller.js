module.exports = function createUserController({ createUser, Joi }) {
  return async function createUserControllerAction(req, res) {

    console.log("\n\n create-user-controller.js was called\n\n");


    try {
      const validation = isValid(req.body);

      const userInfo = await createUser(validation.value);
      
      res.status(201).send({
        status: "success",
        id: userInfo[1]
      });
    } catch (error) {
      // console.log(error);
      res.status(404).send(error);
    }
  };

  // JOI VALIDATION FUNCTION
  function isValid(data) {

    console.log("\n\n create-user-controller.js joi validation function was called\n\n");

    const schemass = Joi.object({
      userName: Joi.string().min(3).required(),
      userEmail: Joi.string()
        .required()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
      accessToken: Joi.string().min(3).required(),
      refreshToken: Joi.string().min(3).required(),
      photo: Joi.string().required(),
      expiresIn: Joi.number().required()
    });
    const { error } = schemass.validate(data);
    if (error) {
      throw (error.details[0].message);
    } else {
      return schemass.validate(data);
    }
  }
}