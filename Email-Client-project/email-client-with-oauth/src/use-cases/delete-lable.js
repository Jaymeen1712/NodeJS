module.exports = function deleteLableFunction({ dataAccessLableFunction, Joi }) {
    return async function deleteLable({ id }) {

        console.log("\n\n delete-lable.js --usecase-- was called");

        isValid({ id });

        const valueOfData = await dataAccessLableFunction.deleteLableDb({ id });
        
        if (valueOfData.rowCount > 0) {
            return "deleted";
        } else {
            throw "no lable exist";
        }

        // JOI VALIDATION FUNCTION
        function isValid({ id }) {

            console.log("\n\n delete-lable.js --usecase-- joi validation function was called");
            
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
