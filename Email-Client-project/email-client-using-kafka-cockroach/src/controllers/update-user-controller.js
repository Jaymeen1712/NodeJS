module.exports = function updateUserController({ updateUser, Joi }) {
  return async function updateUserControllerAction(req, res) {
    try {

      const data = req.body

      const validation = isValid({ data });

      const value = validation.value;
      const id = req.params.id;

      const userInfo = await updateUser({ value, id });

      res.status(200).send(userInfo);

    } catch (error) {
      res.status(404).send(error);
    }

    function isValid({ data }) {
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

      const { error } = schemass.validate(data);
      if (error) {
        throw (error.details[0].message);
      } else {
        return schemass.validate(data);
      }
    }
  };
};
