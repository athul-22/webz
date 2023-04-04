import React, { useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom';
import './Styles/signin.css';
import main from './Images/MAIN.png'
import gicon from './Images/gicon.webp'
import { useGoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2'
import { uid } from 'react-uid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

function Signin() {

  //✅ STATES 
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  //✅ FIREBASE FIRESTORE DATA SENDING
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

  function success(){
    if (localStorage.getItem("signin") === "1") {
      window.location.replace('/success');
    }
    else {
      alert("login failed")
    }
  }


  const handleSubmit = (event) => {
    const newData = {
      name: name,
      email: email,
    };
    // Send data to the database
    database.ref(name).set(newData)
      .then(() => {
        console.log('Data sent successfully');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
 
  // ✅ SIGNIN VALUE DB = 1
  localStorage.setItem("signin", "1");
  // ✅ NAME DB -> NAME 
  localStorage.setItem("name", name);
  // ✅ EMAIL DM -> EMAIL
  localStorage.setItem("email", email);
  // ✅ AFTER ACCOUNT CREATING REDIRECTING TO HOME PAGE
  
}
 


const login = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),
  onError: tokenResponse => console.log(tokenResponse),
  onClick: tokenResponse => console.log(tokenResponse),
  onNonOAuthError: tokenResponse => alert(tokenResponse),
  onChange: tokenResponse => console.log(tokenResponse),

});


return (
  <div>
    {/* MANUAL LOGIN FORM */}
    <div className="form">
      <div className='f-header'>
        <center><p className='f-title'>⎯  Sign In ⎯</p></center>
        <center><p className='f-des'>Create account to access full features</p></center>
        <center><input placeholder='Name' id='name' className='name' type="text" value={name} required onChange={e => setName(e.target.value)} /></center>
        <center><input placeholder='email' id='email' className='email' type="email" required value={email} onChange={e => setEmail(e.target.value)} /></center>
        <center><button onClick={handleSubmit} className='signin' >Sign In</button></center>
      </div>
    </div>

    {/* ⭐️ GOOGLE SIGNIN BUTTON DISABLED */}
    {/* GOOGLE LOGIN FORM */}
    {/* <div onClick={login} className='gform'>
        <img src={gicon} height="40px" width="40px" className="gicon" alt='' />
        <p id='gtext'>Continue with Google</p>
      </div> */}
    <img src={main} className="main-img" alt='' />
  </div>
)
}

export default Signin;