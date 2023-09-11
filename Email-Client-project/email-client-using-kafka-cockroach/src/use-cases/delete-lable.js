module.exports = function deleteLableFunction({ dataAccessLableFunction, Joi }) {
    return async function deleteLable({ id }) {

        isValid({ id });

        const valueOfData = await dataAccessLableFunction.deleteLableDb({ id });
        
        if (valueOfData.rowCount > 0) {
            return "deleted";
        } else {
            throw "no lable exist";
        }

        function isValid({ id }) {
            const schemas = Joi.object({
                id: Joi.string().required(),
            });
            const { value, error } = schemas.validate({ id });
            if (error) {
                const message = error.details[0].message;
                throw message
            } else {
                return value
            }
        }
    }
}
