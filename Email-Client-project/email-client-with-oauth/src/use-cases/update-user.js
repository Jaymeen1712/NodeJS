module.exports = function updateUserFunc({ update, Joi, makeUserTemplate }) {
  return async function updateUser({ value, id }) {

    console.log("\n\n update-user.js --usecase-- was called\n\n")

    const data = value;

    const validateValue = isValid({ data });

    const userName = validateValue.user_name;
    const userEmail = validateValue.user_email;
    const accessToken = validateValue.access_token;
    const refreshToken = validateValue.refresh_token;
    const photo = validateValue.photo;

    const ans = makeUserTemplate({ id, userName, userEmail, accessToken, refreshToken, photo });

    const userId = ans.getUserId();

    const entitiesValue = {
      user_name: ans.getUserName(),
      user_email: ans.getUserEmail(),
      access_token: ans.getAccessToken(),
      refresh_token: ans.getRefreshToken(),
      photo: ans.getPhoto()
    }


    const valueOfUpdateData = await update({ entitiesValue, userId });

    if (valueOfUpdateData.rowCount > 0) {
      return "updated";
    }
    else {
      throw ("No user exist");
    }

    // JOI VALIDATION FUNCTION
    function isValid({ data }) {

      console.log("\n\n update-user.js --usecaser-- joi validation function was called\n\n");
      
      const schemass = Joi.object({
        user_name: Joi.string().min(3).optional(),
        user_email: Joi.string()
          .optional()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
        access_token: Joi.string().min(3).optional(),
        refresh_token: Joi.string().min(3).optional(),
        photo: Joi.string(),
      });
      const { value, error } = schemass.validate(data);
      if (error) {
        throw (error.details[0].message);
      } else {
        return value;
      }
    }
  };
};