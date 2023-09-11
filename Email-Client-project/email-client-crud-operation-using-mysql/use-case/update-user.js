
module.exports = function updateUserFunc({updatedb,Joi}) {
  return function updateUser(value) {
    //     const userExistOrNot = checkMail(value);
    //     if (userExistOrNot) {
    // FUNCTION CALLING FOR JOI VALIDATION
    const vilidationOfData = check(value);
    if (vilidationOfData.error) {
      console.log(vilidationOfData.error.details[0].message);
      return;
    }
   return updatedb
   
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
