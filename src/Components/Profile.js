import React from 'react'
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes } from "firebase/storage";
import { ref, getDownloadURL } from "firebase/storage"
import { uid } from 'react-uid';



const firebaseConfig = {
    apiKey: "AIzaSyAl9sbbgwxkyeh1rfQMVxbPnvNvX6SlS4s",
    authDomain: "todoapp-fb470.firebaseapp.com",
    databaseURL: "https://todoapp-fb470-default-rtdb.firebaseio.com",
    projectId: "todoapp-fb470",
    storageBucket: "todoapp-fb470.appspot.com",
    messagingSenderId: "453121987629",
    appId: "1:453121987629:web:923cc5722fa474bef314a4"
  };


  const app = initializeApp(firebaseConfig)
  const storage = getStorage()

var id = Math.floor(Math.random() * 101);

export async function upload(profile,user_name){
    const fileRef = ref(storage,  id +".png");
    const snapshot = await uploadBytes(fileRef , profile);
    const photoURL = getDownloadURL(fileRef);
    console.log("success");
    console.log(photoURL);
    fetch(photoURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
}
