module.exports = function buildMakeLableTemplate({Joi}) {
    return function makeLableTemplate({
     id,
     name
    }) {
      const schema = Joi.object({
        id: Joi.string(),
        name: Joi.string(),
      });
      const {value, error} = schema.validate({
        id,
        name,
      });
      if (error) {
        throw (error.details[0].message);
      }
      return Object.freeze({
        getId: () => value.id,
        getName: () => value.name,
      });
    };
  };