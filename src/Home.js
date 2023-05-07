import React, { useEffect, useState, useRef } from 'react'
import "./Styles/home.css"
import './Styles/sidebar.css';
import $ from 'jquery';
import Swal from 'sweetalert2'
// ✅ FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { update, child } from 'firebase/compat/database';
// ✅ IMAGES
import add from './Images/more.png'
import dashboard from './Images/dashboard.png'
import user from './Images/user.png'
import fire from './Images/fire.png'
import profile from './Images/profile.png'
import notification from './Images/notification.png'
import Notifications from "react-notifications-menu";
import premium from './Images/premium.png'
import speedometer from './Images/speedometer.png'
import twitter from './Images/twitter.png';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import empty from './Images/empty.jpg';
import Calender from './Components/Calender'
import CalendarIcon from './Images/calendar.png';
import Modal from 'styled-react-modal'
import HoverImage from 'react-hover-image/build';
import addIcon from './Images/add.png'
import { upload } from './Components/Profile'
import { uid } from 'react-uid';
import { Component } from "react";
// ✅ BOOTSTRAP

function Home() {
  // ⭐️ LOCAL STORAGE VALUE GETTING FUNCTION
  const namDB = localStorage.getItem("name");
  const mailDB = localStorage.getItem("email");
  console.log(namDB);
  console.log(mailDB);

  // ⭐️ STATES

  const [profiles, setProfiles] = useState("https://cdn-icons-png.flaticon.com/512/141/141739.png");


  // ⭐️ REFS
  const InputFile = useRef(null);

  // ✅ IMAGE CLICK TO SHOW UPLOAD OPTION
  const user_name_v1 = localStorage.getItem("name")
  const user_name = user_name_v1.replace(/[NP^a-zA-Z]/g, "")

  // ✅ NAME AND EMAIL SETTING FROM LOCAL STORAGE
  useEffect(() => {
    $("#nam").html(namDB);
    $("#mail").html(mailDB);
  }, [])

  const fileUpload = () => {
    InputFile.current.click();
    upload(profiles, user_name)
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      // setProfiles(e.target.files[0])
    }
    else {
      console.log("error");
    }
  }

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
  

   // 🔥 STARTING

   const CustomKeyArray = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newKey, setNewKey] = useState('');
  
    const handleInputChange = (event) => {
      if (event.target.name === 'newItem') {
        setNewItem(event.target.value);
      } else if (event.target.name === 'newKey') {
        setNewKey(event.target.value);
      }
    };
  

  const postSubmit = (event) => {
    event.preventDefault();
    //✅ ENTRY POINT CHECKING - POST VALUE EMPTY OR NOT 
    //✅ IF POST VALUE EMPTY
    if (document.getElementById("post").value === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Post field is empty',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    }
    else {

      // 🔥🎯 WORKING ON HERE

      // ⭐️ 1 - DATA STORE IN ARRAY 
      // ⭐️ 2 - DISPLAY WHOLE ARRAY IN CONSOLE
      // ⭐️ 3 - SENT WHOLE ARRAY UOPDATING WISE TO FIREBASE  ➡ UNDER USER SPECIFIC NAME  ➡ LOCAL STORAGE (NAME)  ➡ USING CHILD
      // ⭐️ 4 - RETRIVE DATA FROM FIREBASE ➡ DISPLAY ON PROFILE  ➡ USE CSS POST STYLE / POST TEMPLATE


      CustomKeyArray();
     
    }
  }

  

    const handleSubmit = (event) => {
      event.preventDefault();
      setItems((prevItems) => [...prevItems, { [newKey]: newItem }]);
      setNewKey('');
      setNewItem('');
    };
  

    // END 🔥  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

  // ⭐️ STYLE FOR MODEL BOX
  const CalenderModel = Modal.styled`
    width: 550px;
    height: 350px;
    display:block;
    justify-content:center;
    align-items: center;
    justify-content: center;
    background-color:white;
    border-radius:10px;
  `

  // ⭐️ STYLE FOR MODEL BOX
  const NotificationModel = Modal.styled`
    width: 550px;
    height: 350px;
    display:block;
    justify-content:center;
    align-items: center;
    justify-content: center;
    background-color:white;
    border-radius:10px;
  `

  // ⭐️ FUNCTION FOR MODEL BOX
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  function notifModal(e) {
    setIsOpen(!isOpen)
  }

  let home = document.getElementsByClassName("dashboard");
  let trending = document.getElementsByClassName("trending");
  let account = document.getElementsByClassName("account");

  function dashFun() {
    $(".dashboard").css("display", "block");
    $(".trending").css("display", "none");
    $(".account").css("display", "none");
  }

  function trendFun() {
    $(".dashboard").css("display", "none");
    $(".trending").css("display", "block");
    $(".account").css("display", "none");
  }

  function accFun() {
    $(".dashboard").css("display", "none");
    $(".trending").css("display", "none");
    $(".account").css("display", "block");
  }

  return (
    <div>
      {/* ✅ SIDEBAR STARTING */}
      <div className="sidenav">
        <div className="user">
          <center><HoverImage profile={profile} setProfile={setProfiles} onClick={fileUpload} src={profiles} hoverSrc={addIcon} className="profile" height="60px" width="60px" alt="" /><br /></center>
          {/* <center><img onClick={fileUpload} className="profile" src={profile} height="60px" width="60px" alt="" /><br /></center> */}
          <input onChange={handleChange} ref={InputFile} type="file" className="uploadInput" style={{ display: 'none' }} />
          <center><p id='nam' className="nam"></p></center>
          <center><p id='mail' className="mail"></p></center>
        </div>

        <ul>
          <li onClick={dashFun}><img height="50px" width="50px" alt="" src={dashboard} /><p>Dashboard</p></li>
          <li onClick={trendFun}><img height="50px" width="50px" alt="" src={fire} /><p>Trending</p></li>
          <li onClick={accFun}><img height="50px" width="50px" alt="" src={user} /><p>Account</p></li>
        </ul>

        {/* ✅ LOGOUT - BOTTOM NAV */}
        <ul>
          <li>Logout</li>
        </ul>
      </div>

      {/* ⭐️ CONTENT SECTION STARTS */}

      {/* ✅ DASHBOARD */}
      <div className='dashboard'>
        <p className='dashboards' id='header'>| Dashbaord</p>
        <div className='dash_top'>
          {/* ⭐️ NOTIFICATION MODEL */}
          <img src={add} alt="" className="addpost" />
          <img onClick={notifModal} src={notification} alt="" className="notification" />
          <NotificationModel
            isOpen={isOpen}
            onBackgroundClick={notifModal}
            onEscapeKeydown={notifModal}>
            <center><img height="250px" width="250px" src={empty} alt="empty" /></center>
            <center><p id='notif-text'>Empty !</p></center>
            <center> <button id='model-close' onClick={notifModal}>Close</button></center>
          </NotificationModel>
        </div>

        {/* ❗️ WORKING AREA */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="newKey">Enter a custom key name:</label>
          <input type="text" name="newKey" value={newKey} onChange={handleInputChange} />
          <br />
          <label htmlFor="newItem">Enter a new item:</label>
          <input type="text" name="newItem" value={newItem} onChange={handleInputChange} />
          <br />
          <button type="submit">Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{Object.keys(item)}: {Object.values(item)}</li>
          ))}
        </ul>


        {/* ✅ TRENDING */}
        <div className='trending'>
          <p id='header'>| Trending</p>

        </div>

        {/* ✅ ACCOUNT */}
        <div className='account'>
          <p id='header'>| Account</p>
          <img src={notification} alt="" className="notification" />
        </div>

        {/* ✅ END */}
      </div>
    </div>
  )
}
}

export default Home