module.exports = function createAddMailsConsumer({ fetchMessages ,kafka, fetch, messageFunction, messageFormater, fetchLablePrioritywiseFunction, updatePageToken, fetchLableId, addAttachmentfunction, recipientsFunctions, dataAccessFolderAssociation, fs }) {
    return function addMailsConsumer() {
        let consumer;
        for (let i = 0; i < 10; i++) {

        console.log("\n\n get-messages-consumer.js was called",i);
        
        consumer = kafka.consumer({ groupId: 'get-messages-group' })
        consumer.connect()
        consumer.subscribe({ topic: 'get-user-messages', fromBeginning: false })
        }
        const today = new Date();
        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        const year = oneMonthAgo.getFullYear();
        const month = oneMonthAgo.getMonth() + 1;
        const day = oneMonthAgo.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const userData = JSON.parse(message.value.toString());
                userData.formattedDate = formattedDate;
                fetchMessages({ userData })
            },
        })
    }
}