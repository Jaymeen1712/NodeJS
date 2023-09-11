let CronJob = require('cron').CronJob
const { fetchUsersExpiresAccessToken } = require('../use-cases');
module.exports = function cronForUpdateAccessToken() {
    const job = new CronJob(
        '* * * * * *',
        function () {
            console.log('\n\ncron-fro-update-access-token.js  function was called\n\n');
            fetchUsersExpiresAccessToken();
        },
    );
    job.start()
}