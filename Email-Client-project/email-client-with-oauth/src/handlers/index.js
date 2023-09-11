const { Kafka } = require('kafkajs');
const b64Decode = require('base-64').decode;
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

// const producer = kafka.producer();
// const admin = kafka.admin();
// async function run() {
//     await producer.connect()
//     await admin.connect()
//     const listOfTopic = await admin.listTopics();

//     console.log(listOfTopic, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>::::::::::::::::::::::::::::::::::::::::::::", listOfTopic.includes('get-user-messages'));

//     if (!listOfTopic.includes('get-user-messages'));
//     await admin.createTopics({
//         topics: [{ topic: 'get-user-messages' }],
//     })
//     await admin.createPartitions({
//         topicPartitions:[ {
//             topic: 'get-user-messages',
//             count: 10
//         }]
//     })
// }
// run();

const fetch = require("node-fetch");
const fs = require('fs');
const { createLable, messageFunction, fetchLablePrioritywiseFunction, updatePageToken, fetchLableId, addAttachmentfunction, recipientsFunctions, fetchMessages } = require("../use-cases")
const { dataAccessLableFunction, dataAccessAttachmetsFunction, dataAccessRecipientsFunctions, dataAccessFolderAssociation } = require('../data-access')



const messageFormaterFunction = require('./message-formater');
const messageFormater = messageFormaterFunction({ b64Decode });

const createAddLableConsumer = require('./add-lable-consumer');
const addLableConsumer = createAddLableConsumer({ kafka, fetch, createLable, dataAccessLableFunction });
const createAddMailsConsumer = require('./get-messages-consumer')
console.log(fetchMessages);
const addMailsConsumer = createAddMailsConsumer({ fetchMessages ,kafka, fetch, messageFunction, messageFormater, fetchLablePrioritywiseFunction, updatePageToken, fetchLableId, addAttachmentfunction, recipientsFunctions, dataAccessFolderAssociation, fs })

module.exports = {
    addLableConsumer,
    addMailsConsumer,
    messageFormater
}
