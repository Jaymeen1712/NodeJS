module.exports = function getLableFunction({ dataAccessLableFunction, Joi }) {
  return async function getLable({ id }) {
    let validData = isValid({ id });

    // console.log(dataAccessLableFunction)
    console.log("------------------",id);
    const ans =  await dataAccessLableFunction.getLableDb({id});
    console.log(ans,"00000000000000000000");
    return ans.rows
    function isValid({ id }) {
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
