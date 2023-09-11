module.exports = function addLableFunction({ dataAccessLableFunction, Joi, makeLableTemplate }) {
  return async function createLable(id, name, syncedFolder_id, priority) {

    // console.log("\n\nadd-lable.js use-case was called \n\n")

    isValid(id);

    const ans = makeLableTemplate({ id, name, syncedFolder_id, priority });

    const entityId = ans.getId();
    const entityName = ans.getName();
    const entitySyncFolderId = ans.getSyncFolderId();
    const entityPriority = ans.getPriority();

    const lableInfo = await dataAccessLableFunction.createLableDb(entityId, entityName, entitySyncFolderId, entityPriority);
    return lableInfo;

    // JOI VALIDATION FUNCTION
    function isValid(id) {

    // console.log("\n\nadd-lable.js use-case joi validation function was called \n\n")

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
