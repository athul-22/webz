import React, { useState, useEffect } from 'react';
import { collection } from './mongodb';

function Instagram() {

  const [data, setData] = useState([]);

  useEffect(() => {
    collection.find().toArray((err, items) => {
      setData(items);
    });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Instagram;
