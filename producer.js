import { kafka } from "./client.js";

async function init() {
    const producer = kafka.producer();
    console.log("Producer created successfully....");
    
    await producer.connect();
    console.log("Producer connected");

    const result = await producer.send({
        topic: 'my-app',
        messages: [{
            partition: 0,
            key: "location-update",
            value: JSON.stringify({ name: "Tony Stark", loc: "Hyderabad" })
        }]
    });

    console.log("Message sent successfully:", result);
    
    console.log("Producer disconnecting...");
    await producer.disconnect();
    console.log("Producer disconnected");
}

init();
