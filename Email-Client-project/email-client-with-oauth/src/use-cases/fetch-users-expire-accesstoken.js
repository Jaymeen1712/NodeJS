
module.exports = function createFetchUsersExpireAccessToken({ dataAccessUserFunction, fetchUserAccessToken }) {
    return async function fetchUsersExpiresAccessToken() {

        console.log("\n\n fetch-user-expire-accesstoken --usecase-- was called\n\n");
        
        const result = await dataAccessUserFunction.expiresIndb()

        for (let i = 0; i < result.length; i++) {
            if (Date.now() > result[i].expires_in) {
                const currentTimestamp = Date.now();
                const fiftyFiveMinutesLater = new Date(currentTimestamp);
                fiftyFiveMinutesLater.setMinutes(fiftyFiveMinutesLater.getMinutes() + 55);
                const expiresIn = fiftyFiveMinutesLater.getTime()
                await fetchUserAccessToken({ result: result[i], expiresIn })
            }
        }
    }
}