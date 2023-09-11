module.exports = function getLableFunction({ dataAccessLableFunction, Joi }) {
  return async function getLable({ id }) {

    console.log("\n\n get-lable.js --usecase-- was called\n\n");

    let validData = isValid({ id });

    const ans =  await dataAccessLableFunction.getLableDb({id});

    const lables = ans.rows.map(({ name, priority }) => ({ name, priority }));
    // console.log(lables);
    return lables
    
    // JOI VALIDATION FUNCTION
    function isValid({ id }) {

      console.log("\n\n get-lable.js --usecase-- joi validation function was called\n\n");
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
// const lables = await cockroach.query("select name from lables where fetched=false and priority = (select min(priority) from lables where fetched=false)");
