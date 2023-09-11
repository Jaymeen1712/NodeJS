let CronJob = require('cron').CronJob

let result = true;
let myPromise;
let count = 0;
setInterval(() => {
    console.log(count++, result);
    myPromise = new Promise((resolve, reject) => {
        if (result) {
            resolve('Operation completed successfully.');
        } else {
            reject('Operation failed.')
        }
    }).catch((error) => {
        console.error('Promise rejected:', error);
    });
}, 1000);

const job = new CronJob('* * * * * *', async () => {
    try {
        const result = await myPromise;
        console.log('Promise resolved:', result);
    } catch (error) {
        console.error('Promise rejected:', error);
    }
});

if (!job.running) {
    job.start();
}
