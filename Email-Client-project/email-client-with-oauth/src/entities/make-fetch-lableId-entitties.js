module.exports = function buildMakeLableTemplate({Joi}) {
    return function makeFetchLableIdTemplate({
     name
    }) {
      const schema = Joi.object({
        name: Joi.string().required()
      });
      const {value, error} = schema.validate({
        name
      });
      if (error) {
        throw (error.details[0].message);
      }
      return Object.freeze({
        getLableName: () => value.name
      });
    };
  };
