const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://athul:athul@athul.zzuss6q.mongodb.net/athul';

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("athul").collection("users");
  // perform actions on the collection object
  client.close();
});

