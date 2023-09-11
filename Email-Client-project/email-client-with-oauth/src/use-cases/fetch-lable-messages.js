module.exports = function createFetchLableMessage({ kafka, fetch, messageFunction, fetchLablePrioritywiseFunction ,recipientsFunctions, folderAssociationFunction, addAttachmentfunction, updatePageToken, messageFormater }) {
    return async function fetchLableMessage({ messages, userData, nextPageToken, lableName, count, formattedDate }) {

        console.log("\n\n fetch-lable-message.js --usecase-- was called");

        for (let obj of messages) {
            count++;
            let email = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${obj.id}?access_token=${userData.accessToken}`);
            let response = await email.json();

            const result = messageFormater(response);

            const createdAt = new Date(result.internalDate).getFullYear() + '/' + (new Date(result.internalDate).getMonth() + 1 + '/' + new Date(result.internalDate).getDate())

            const returningMessageId = await messageFunction(result.textBody, result.textHtml, result.subject, result.snippet, userData.id, result.id, result.threadId, result.inReplyTo, result.headers.references, createdAt)

            await recipientsFunctions({ result, messageId: obj.id })

            await folderAssociationFunction({ labelIds: result.labelIds, messageId: returningMessageId })

            await addAttachmentfunction({ result, userData, messageId: obj.id })

        }
        if (nextPageToken) {

            do {
                let email = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:${lableName} after:${formattedDate}&pageToken=${nextPageToken}&access_token=${userData.accessToken}`);
                let { messages, nextpage, resultSizeEstimate } = await email.json();
                let count = 0;
                if (nextpage) {

                    await fetchLableMessage({ messages, userData, nextPageToken: nextpage, lableName, count });
                }
                nextPageToken = nextpage
            } while (nextPageToken)
        }

        if (count == messages.length) {
            const fetched = true;

            await updatePageToken({ nextPageToken, fetched, lableName })

            await kafkaProducer({ userData });

        };
    }

    async function kafkaProducer({ userData }) {

        console.log("-------------------------------------------------kafka producer was called in fetch-lable-messages.js--------------------------------------------------------------------");

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
        addMailsConsumer();
    }
}