import React, {useState, useEffect} from 'react';
import { model } from 'mongoose';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    const namDB = localStorage.getItem("name");
    const mailDB = localStorage.getItem("email");
  
      const [post , setPost ] = useState("");
      const [newPost , setNewPost] = useState([]);
  
      // ✅ FIREBASE REALTIME DATABASE FOR POST 
    const firebaseConfig = {
      apiKey: "AIzaSyAl9sbbgwxkyeh1rfQMVxbPnvNvX6SlS4s",
      authDomain: "todoapp-fb470.firebaseapp.com",
      databaseURL: "https://todoapp-fb470-default-rtdb.firebaseio.com",
      projectId: "todoapp-fb470",
      storageBucket: "todoapp-fb470.appspot.com",
      messagingSenderId: "453121987629",
      appId: "1:453121987629:web:923cc5722fa474bef314a4"
    };
  
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
  
    setNewPost([post, ...newPost]);
  
    useEffect(() => {
      console.log(newPost);
      const newData = {
        post: newPost,
      };
  
      database.ref(namDB).update(newData)
        .then(() => {
          console.log('Data sent successfully');
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    },[newPost]);
  
    return (
      <div>
        <button type="button" className="button" onClick={() => setOpen(o => !o)}>
          Controlled Popup
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <center><span> New Post </span><br/></center>
      <center></center><input id='post_input' type='text' placeholder='enter your post here'  /><center/>
            <br/>
            <button onClick={ControlledPopup} id='post_btn'>POST</button>
          </div>
        </Popup>
      </div>
    );
  };

  export default ControlledPopup;