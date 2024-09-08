import { kafka } from "./client.js";


  async function init() {
    const admin= kafka.admin()
        console.log("admin connecting ....")
        admin.connect();
        console.log("admin connection suces...")
        console.log("creating topic......")
        await admin.createTopics({
            topics:[{
                topic:'raider-update',
                numPartitions:2
            }]
        })
   
    console.log("rider created")
    console.log("disconnected admin....")
    await admin.disconnect()
  }

  init();


