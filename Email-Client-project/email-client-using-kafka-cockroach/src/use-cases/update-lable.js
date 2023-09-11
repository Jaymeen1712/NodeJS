module.exports = function updateLableFunction({ dataAccessLableFunction, Joi, makeLableTemplate }) {
    return async function updateLable({ name, id }) {
        let validationObj = { name: name, id: id }

        isValid({ validationObj });

        console.log("&&&&&&&&&&&7", name, id);

        const ans = makeLableTemplate({ id, name })

        const entityId = ans.getId();
        const entityName = ans.getName();

        const valueofData = await dataAccessLableFunction.updateLableDb({ entityId, entityName });

        if (valueofData.rowCount > 0) {
            return "updated";
        }
        else {
            throw "no user exist";
        }
        function isValid({ validationObj }) {
            const schemas = Joi.object({
                name: Joi.string().min(3).required(),
                id: Joi.string().required(),
            });
            const { value, error } = schemas.validate(validationObj);
            if (error) {
                throw (error.details[0].message);
            } else {
                return value;
            }
        }
    }
}
