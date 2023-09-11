const con = require("../database-connection");
module.exports = function updateUserController({ updateUser, Joi }) {
  return function updateUserControllerAction(req, res) {
    try {
      const validation = check(req.body)
      if (validation.error) {
        console.log(validation.erro);
        console.log(validation.error.details[0].message);
        res.status(400).send(validation.error.details[0].message);
        return;
      }
      console.log("validation value:-",validation.value);

      // USECASE FUNCTION CALL -- CREATEUSER
      const updatedb = updateUser(validation.value);
      const userInfo = updatedb(con, validation.value, req.params.id);
      console.log(userInfo)
      console.log("hihihihih");
      res.status(200).json({
        status: "success",
        data: req.body
      });
    }
    catch(error){
      console.log(error)
      console.log("updateControllerAction Error");
    }

    // FUNCTION FOR JOI VALIDATION
    function check(data) {
      console.log(data);
      const schemass = Joi.object({
        username: Joi.string().min(3).optional(),
        useremail: Joi.string()
          .optional()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
        access_token: Joi.string().min(3).optional(),
        refresh_token: Joi.string().min(3).optional(),
        photo: Joi.string(),
        createdAt: Joi.string().optional(),
        updatedAt: Joi.string().optional(),
      });
      return schemass.validate(data);
    }
  };
};
