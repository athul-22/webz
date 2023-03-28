import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAl9sbbgwxkyeh1rfQMVxbPnvNvX6SlS4s",
    authDomain: "todoapp-fb470.firebaseapp.com",
    databaseURL: "https://todoapp-fb470-default-rtdb.firebaseio.com",
    projectId: "todoapp-fb470",
    storageBucket: "todoapp-fb470.appspot.com",
    messagingSenderId: "453121987629",
    appId: "1:453121987629:web:923cc5722fa474bef314a4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('myCollection').add({ input: inputValue });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;