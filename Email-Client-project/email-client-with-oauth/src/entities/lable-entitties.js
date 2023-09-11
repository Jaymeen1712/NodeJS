  module.exports = function buildMakeFetchLableIdTemplate({Joi}) {
    return function makeLableTemplate({
     id,
     name,
     syncedFolder_id,
     priority,
    }) {
      const schema = Joi.object({
        id: Joi.string(),
        name: Joi.string(),
        syncedFolder_id: Joi.string(),
        priority: Joi.number()
      });
      const {value, error} = schema.validate({
        id,
        name,
        syncedFolder_id,
        priority
      });
      if (error) {
        throw (error.details[0].message);
      }
      return Object.freeze({
        getId: () => value.id,
        getName: () => value.name,
        getSyncFolderId: () => value.syncedFolder_id,
        getPriority: () => value.priority,
      });
    };
  };