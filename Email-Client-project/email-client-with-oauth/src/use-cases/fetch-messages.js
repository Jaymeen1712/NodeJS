module.exports = function createFetchMessages({ kafka, fetch, fetchLablePrioritywiseFunction, updatePageToken, fetchLableMessage }) {
  return async function fetchMessages({ userData }) {

    console.log("\n\n fetch-messages.js --usecase-- was called");

    const lableName = userData.lableName;
    const formattedDate = userData.formattedDate;

    let fetchedMails = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userData.userEmail}/messages?q=in:${lableName} after:${formattedDate}&access_token=${userData.accessToken}`);
    let { messages, nextPageToken, resultSizeEstimate } = await fetchedMails.json();

    if (resultSizeEstimate === 0 || messages === undefined) {
      const fetched = true;

      await updatePageToken({ nextPageToken, fetched, lableName })

      await kafkaProducer({ userData })
    }
    else {
      let count = 0;
      await fetchLableMessage({ messages, userData, nextPageToken, lableName, count, formattedDate });
    }

    async function kafkaProducer({ userData }) {
      console.log("--------------------------------------------------kafka producdr was called in fetch-messages.js--------------------------------------------------------------------");
      const lableName = await fetchLablePrioritywiseFunction();
      if (lableName.rows.length == 0) {
        console.log("All lable Fetched");
        return false
      }
      userData.lableName = lableName.rows[0].name;
      const producer = kafka.producer();
      await producer.connect()
      await producer.send({
        topic: 'get-user-messages',
        messages: [
          {
            value: JSON.stringify(
              userData,
            )
          },
        ],
      })
      producer.disconnect();
    }
  }
}
