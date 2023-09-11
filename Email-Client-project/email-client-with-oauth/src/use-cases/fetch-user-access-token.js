module.exports = function createFetchUserAccessToken({ fetch, updateAccessToken, Joi }) {
    return async function fetchUserAccessToken({ result, expiresIn }) {

        console.log("\n\n fetch-user-access-token.js --usecase-- was called\n\n");

        const refreshToken = result.refresh_token;

        const validValue = isValid({ refreshToken, expiresIn })

        const requestBody = new URLSearchParams({
            'client_id': '201595868467-mmumcrjpm2dm9blseteeslktek08uhv4.apps.googleusercontent.com',
            'client_secret': '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',
            'grant_type': 'refresh_token',
            'refresh_token': validValue.refreshToken
        });

        const accessToken = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: requestBody
        })

        const accessTokenInfo = await accessToken.json();
        await updateAccessToken({ accessToken: accessTokenInfo.access_token, refreshToken: result.refresh_token, expiresIn })
    }

    // JOI VALIDATION FUNCTION
    function isValid({ refreshToken, expiresIn }) {

        console.log("\n\n fetch-user-access-token --usecase-- was called\n\n");

        const schemass = Joi.object({
            refreshToken: Joi.string().required(),
            expiresIn: Joi.number().required(),
        });
        const { value, error } = schemass.validate({ refreshToken, expiresIn });
        if (error) {
            const message = error.details[0].message;
            throw message;
        } else {
            return value;
        }
    }
}