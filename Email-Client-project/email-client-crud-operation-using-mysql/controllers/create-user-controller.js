const con = require("../database-connection");
module.exports = function createUserController({ createUser, Joi }) {
  return function createUserControllerAction(req, res) {
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
      const creatdb = createUser(validation.value);
      const userInfo = creatdb(con,validation.value);
      console.log(userInfo)
      console.log("hihihihih");
      res.status(200).json({
        status: "success",
        data: req.body
      });
    }
    catch(error){
      console.log(error)
      console.log("createUserControllerAction Error");
    }

    // FUNCTION FOR JOI VALIDATION
    function check(data) {
      console.log(data);
      const schemass = Joi.object({
        username: Joi.string().min(3).required(),
        useremail: Joi.string()
          .required()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
        access_token: Joi.string().min(3).required(),
        refresh_token: Joi.string().min(3).required(),
        photo: Joi.string(),
        createdAt: Joi.string().required(),
        updatedAt: Joi.string().required(),
      });
      return schemass.validate(data);
    }
  };
};
