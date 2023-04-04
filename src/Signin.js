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



function Signin() {

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

  const db = firebase.firestore();

  const sendDataToFirestore = async (users, data) => {
    try {
      const docRef = await db.collection(users).add(data);
      console.log(`Document written with ID: ${docRef.id}`);
    } catch (error) {
      console.error(`Error adding document: ${error}`);
    }
  };


  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: tokenResponse => console.log(tokenResponse),
    onClick: tokenResponse => console.log(tokenResponse),
    onNonOAuthError: tokenResponse => alert(tokenResponse),
    onChange: tokenResponse => console.log(tokenResponse),

  });

 

  

  // ⬇️ FB DATA SENTING
  // const postdataFun = async (e) =>{
  //   e.preventDefault();

  //    const namo = name;
  //    const emailo = email;

  //    const fbUrlo = 'https://todoapp-fb470-default-rtdb.firebaseio.com/' + namo + '.json?'

  //    const res = await fetch(fbUrlo,
  //     {
  //       method:'PUT',
  //       headers:{
  //         'Contenttype':'application/json'
  //       },
  //       body: JSON.stringify({
  //         namo,
  //         emailo,
  //       })
  //     })
  //     Swal.fire({
  //       title: 'Success',
  //       text: 'Successfully Submited',
  //       icon: 'success',
  //       confirmButtonText: 'Close'
  //     });
  // }


  function fbFun() {
    sendDataToFirestore('myCustomCollection', {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com'
      });
    //✅ ENTRY POINT CHECKING - NAME VALUE EMPTY OR NOT 
    //✅ NAME VALUE EMPTY
    if (document.getElementById("name").value === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Enter Your Name to continue',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    }
    //✅ MAIL VALUE EMPTY
    else if (document.getElementById("email").value === "") {

      Swal.fire({
        title: 'Error!',
        text: 'Enter Your Mail id to coontinue',
        icon: 'error',
        confirmButtonText: 'Close'
      })

    }
    else {
      const namo = name;
      const emailo = email;
      // 🟡 FIREBASE DATA POSTING 
      const fbUrl = 'https://todoapp-fb470-default-rtdb.firebaseio.com/1.json?'
      fetch(fbUrl,
        {
          method: "PUT",
          body: JSON.stringify({
            namo,
            emailo,
          })
        })


      // ✅ SIGNIN VALUE DB = 1
      localStorage.setItem("signin", "1");
      // ✅ NAME DB -> NAME 
      localStorage.setItem("name", name);
      // ✅ EMAIL DM -> EMAIL
      localStorage.setItem("email", email);
      // ✅ AFTER ACCOUNT CREATING REDIRECTING TO HOME PAGE

      if (localStorage.getItem("signin") === "1") {
        window.location.replace('/success');
      }
      else {
        alert("login failed")
      }
    }
  }

  return (
    <div>
      {/* MANUAL LOGIN FORM */}
      <div className="form">
        <div className='f-header'>
          <center><p className='f-title'>⎯  Sign In ⎯</p></center>
          <center><p className='f-des'>Create account to access full features</p></center>
          <center><input placeholder='Name' id='name' className='name' type="text" value={name} required onChange={e => setName(e.target.value)} /></center>
          <center><input placeholder='email' id='email' className='email' type="email" required value={email} onChange={e => setEmail(e.target.value)} /></center>
          <center><button onClick={fbFun} className='signin' >Sign In</button></center>
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