import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://athul:athul@athul.zzuss6q.mongodb.net/athul?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the client when you're finished with it
    await client.close();
  }
}

run().catch(console.dir);
