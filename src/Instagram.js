import React, { useState } from 'react';
import { MongoClient } from './db';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });
    try {
      await client.connect();
      const database = client.db('myDatabase');
      const collection = database.collection('myCollection');
      const result = await collection.insertOne({ data: inputValue });
      console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
