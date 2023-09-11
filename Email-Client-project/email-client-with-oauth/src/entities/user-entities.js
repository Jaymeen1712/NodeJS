module.exports = function buildMakeUserTemplate({Joi}) {
    return function makeUserTemplate({
      id,
      userName,
      userEmail,
      accessToken,
      refreshToken,
      photo,
      expiresIn,
    }) {
      const schema = Joi.object({
        id: Joi.string().optional(),
        userName: Joi.string().min(3).optional(),
        userEmail: Joi.string().optional()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
        accessToken: Joi.string().min(3).optional(),
        refreshToken: Joi.string().min(3).optional(),
        photo: Joi.string().optional(),
        expiresIn: Joi.number().optional()
      });
      const {value, error} = schema.validate({
        id,
        userName,
        userEmail,
        accessToken,
        refreshToken,
        photo,
        expiresIn
      });
      if (error) {
        throw (error.details[0].message);
      }
      return Object.freeze({
        getUserId: () => value.id,
        getUserName: () => value.userName,
        getUserEmail: () => value.userEmail,
        getAccessToken: () => value.accessToken,
        getRefreshToken: () => value.refreshToken,
        getPhoto: () => value.photo,
        getExpiresIn: () => value.expiresIn
      });
    };
  };
