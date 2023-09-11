module.exports = function createAddLabelConsumer({ kafka, fetch, createLable, dataAccessLableFunction }) {
    return function addLableConsumer() {
        const consumer = kafka.consumer({ groupId: 'add-user-lable-group' })
        consumer.connect()
        consumer.subscribe({ topic: 'add-user-lable', fromBeginning: false })

        consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const userData = JSON.parse(message.value.toString());
                fetchLable({ userData }),
                producerForMessage({ userData })

            },
        })
    }

    async function fetchLable({ userData }) {
        let lable = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userData.userEmail}/labels?access_token=${userData.accessToken}`);
        const lables = await lable.json();
        let priority = 6;
        lables.labels.map(async data => {
            const checlLableExistOrNot = await lableExistOrNot({userId:userData.id, name: data.name})
            if (checlLableExistOrNot) {
                createLable(userData.id, data.name, data.id, priority);
                priority++;
            }
        })
    }

    async function lableExistOrNot({userId, name}) {
        const lableExistOrNot = await dataAccessLableFunction.checkLableExistOrNot({userId, name})
        if (lableExistOrNot > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    async function producerForMessage({ userData }) {
        const producer = kafka.producer();
        await producer.connect()
        await producer.send({
            topic: 'get-user-messages',
            messages: [
                {
                    value: JSON.stringify({
                        id: userData.id,
                        userName: userData.userName,
                        userEmail: userData.userEmail,
                        accessToken: userData.accessToken,
                        refreshToken: userData.refreshToken,
                        photo: userData.photo,
                        lableName: "IMPORTANT",
                    }),
                },
            ],
            partition: 10,

        })
        producer.disconnect();
    }
}