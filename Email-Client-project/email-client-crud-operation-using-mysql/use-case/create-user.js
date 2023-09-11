module.exports = function creatUserFunc({createdb,Joi}) {
  return function createUser(value) {
    //     const userExistOrNot = checkMail(value);
    //     if (userExistOrNot) {
    // FUNCTION CALLING FOR JOI VALIDATION
    const vilidationOfData = check(value);
    if (vilidationOfData.error) {
      console.log(vilidationOfData.error.details[0].message);
      return;
    }
   return createdb
   
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
