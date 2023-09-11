module.exports = function createUpdateAccessToken({ dataAccessUserFunction, Joi }) {
    return async function updateAccessToken({ accessToken, refreshToken, expiresIn }) {

        console.log("\n\n update-access-token.js --usecase-- was called\n\n");

        const validValue = isValid({ accessToken, refreshToken, expiresIn })

        console.log("called update-access-token is here");
        await dataAccessUserFunction.updateExpiresIndb({ accessToken: validValue.accessToken, refreshToken: validValue.refreshToken, expiresIn: validValue.expiresIn });
    }

    // JOI VALIDATION FUNCTION
    function isValid({ accessToken, refreshToken, expiresIn }) {

        console.log("\n\n update-access-token.js --usecase-- was called\n\n");

        const schemass = Joi.object({
            accessToken: Joi.string().required(),
            refreshToken: Joi.string().required(),
            expiresIn: Joi.number().required(),
        });
        const { value, error } = schemass.validate({ accessToken, refreshToken, expiresIn });
        if (error) {
            const message = error.details[0].message;
            throw message;
        } else {
            return value;
        }
    }
}