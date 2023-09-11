module.exports = function buildMakeUpdatePageTokenTemplate({ Joi }) {
    return function makeUpdatePageTokenTemplate({
        nextPageToken, fetched, lableName
    }) {
        const schema = Joi.object({
            nextPageToken: Joi.number().optional().unsafe(),
            fetched: Joi.boolean().optional(),
            lableName: Joi.string().optional(),
        });
        const { value, error } = schema.validate({
            nextPageToken, fetched, lableName
        });
        if (error) {
            throw (error.details[0].message);
        }
        return Object.freeze({
            getNextPageToken: () => value.nextPageToken,
            getFetched: () => value.fetched,
            getLableName: () => value.lableName,
        });
    };
};