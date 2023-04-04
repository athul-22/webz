import React, { useEffect, useState, useRef } from 'react'
import "./Styles/home.css"
import './Styles/sidebar.css';
import $ from 'jquery';
// ✅ FIREBASE
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
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
  const user_name = user_name_v1.replace(/[^a-zA-Z]/g, "")

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
      console.log("errro")
    }
  }


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
          <img  src={add} alt="" className="addpost" />
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
      </div>

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
  )
}

export default Home