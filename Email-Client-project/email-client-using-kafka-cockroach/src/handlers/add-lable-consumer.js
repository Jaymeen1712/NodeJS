const { Kafka } = require('kafkajs');
const { createLable } = require("../use-cases")
// console.log(createLable);

const kafka = new Kafka({
    clientId: 'add lables',
    brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'add-user-lable-group' })
consumer.connect()
consumer.subscribe({ topic: 'add-user-lable', fromBeginning: false })

consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        const id = message.value.toString();
        let val = ["INBOX", "SEND", "STAR", "BIN", "DELETE"];
        for (let i = 0; i < val.length; i++) {
            const name = val[i];
            // console.log(id, name, "__________________");
            await createLable(id, name);
        }
    },
})



