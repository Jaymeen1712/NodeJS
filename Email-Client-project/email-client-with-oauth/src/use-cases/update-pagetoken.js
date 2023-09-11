module.exports = function createUpdatePageToken({ dataAccessLableFunction, Joi, makeUpdatePageTokenTemplate }) {
    return async function updatePageToken({ nextPageToken, fetched, lableName }) {

        console.log("\n\n update-pagetoken.js --usecase-- was called\n\n");

        isValid({ nextPageToken, fetched, lableName });

        const ans = makeUpdatePageTokenTemplate({ nextPageToken, fetched, lableName });

        const entityNextPageToken = ans.getNextPageToken();
        const entityFetched = ans.getFetched();
        const entityLableName = ans.getLableName();

        const lableInfo = await dataAccessLableFunction.updatePageTokendb({entityNextPageToken, entityFetched, entityLableName});
        return lableInfo;

        // JOI VALIDATION FUNCTION
        function isValid({ nextPageToken, fetched, lableName }) {

            console.log("\n\n update-pagetoken.js --usecase-- joi validation function was called\n\n");
            
            const schemass = Joi.object({
                nextPageToken: Joi.number().optional().unsafe(),
                fetched: Joi.boolean().required(),
                lableName: Joi.string().required(),
            });
            const { value, error } = schemass.validate({ nextPageToken, fetched, lableName });
            if (error) {
                const message = error.details[0].message;
                throw message;
            } else {
                return value;
            }
        }
    };
};
