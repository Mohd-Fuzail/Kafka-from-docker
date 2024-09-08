import { kafka } from "./client.js";

async function init() {
    const consumer = kafka.consumer({ groupId: 'my-group' });

    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({ topic: 'my-app', fromBeginning: true });
    console.log("Consumer subscribed to topic");

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log("Message received:", {
                topic,
                partition,
                offset: message.offset,
                key: message.key?.toString(),
                value: message.value.toString(),
            });
        },
    });
}

init();
