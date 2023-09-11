module.exports = function addLableFunction({ dataAccessLableFunction, Joi, makeLableTemplate }) {
  return async function createLable(id, name) {

    isValid(id);

    const ans = makeLableTemplate({ id, name });

    const entityId = ans.getId();
    const entityName = ans.getName();

    dataAccessLableFunction.createLableDb(entityId, entityName);

    function isValid(id) {
      const schemass = Joi.object({
        id: Joi.string().required(),
      });
      const { value, error } = schemass.validate({ id });
      if (error) {
        const message = error.details[0].message;

        throw message;
      } else {

        return value;
      }
    }
  };
};
