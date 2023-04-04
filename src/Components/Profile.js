import React from 'react'
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes } from "firebase/storage";
import { ref, getDownloadURL } from "firebase/storage"

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


export async function upload(profiles,user_name){


  var id = Math.floor(Math.random() * 1000);

    const fileRef = ref(storage,  id +".png");
    const snapshot = await uploadBytes(fileRef , profiles);

    const photoURL = getDownloadURL(fileRef);
    console.log("success");
    console.log(photoURL);
    fetch(photoURL)
    .then((response) => {
      console.log(response);
      console.log(response.PromiseResult)
    })

    .then((data) => {
      console.log(data);
    })
}
