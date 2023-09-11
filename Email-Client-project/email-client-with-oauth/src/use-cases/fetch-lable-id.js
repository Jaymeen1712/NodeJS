module.exports = function creatFetchLableId({ dataAccessLableFunction, Joi, makeFetchLableIdTemplate }) {
    return async function fetchLableId({ name }) {

        console.log("\n\n fetch-lable.js --usecase-- was called\n\n");

        isValid({ name });

        const ans = makeFetchLableIdTemplate({ name });

        const entityLableName = ans.getLableName();

        const lableName = await dataAccessLableFunction.fetchLableIddb({ entityLableName });
        return lableName;

        // JOI VALIDATION FUNCTION
        function isValid({ name }) {

            console.log("\n\n fetch-lable.js --usecase-- joi validation was called\n\n")
            const schemass = Joi.object({
                name: Joi.string().required(),
            });
            const { value, error } = schemass.validate({ name });
            if (error) {
                const message = error.details[0].message;
                throw message;
            } else {
                return value;
            }
        }
    };
};
