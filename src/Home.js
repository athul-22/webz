import React, { useState } from 'react'
import "./Styles/home.css"
import './Styles/sidebar.css';
import dashboard from './Images/dashboard.png'
import user from './Images/user.png'
import fire from './Images/fire.png'
import profile from './Images/profile.png'
import notification from './Images/notification.png'
import $ from 'jquery';
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

function Home(){

  

  // ⭐️ LOCAL STORAGE VALUE GETTING FUNCTION
  const nam = localStorage.getItem("name");
  const mail = localStorage.getItem("email");
  $(".nam").html(nam);
  $(".mail").html(mail);

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
          <center><img className="profile" src={profile} height="60px" width="60px" alt="" /><br /></center>
          <center><p className="nam"></p></center>
          <center><p className="mail">adbit.tesa@gmail.com</p></center>
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
        <div className='dash_top'>
          <p className='dashboard' id='header'>| Dashbaord</p>
          <img src={CalendarIcon} onClick={toggleModal} alt="" className="calender" />

          {/* ⭐️ CALENDER MODEL BOX */}
          <CalenderModel
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                  <br></br>
                  <center><Calender/></center>
                  <br/>
               <center> <button id='model-close' onClick={toggleModal}>Close</button></center>
            </CalenderModel>

          {/* ⭐️ NOTIFICATION MODEL */}
          <img onClick={toggleModal} src={notification} alt="" className="notification"  />
          <NotificationModel
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                  <center><img height="250px" width="250px" src={empty} alt="empty"/></center>
                  <center><p id='notif-text'>Empty !</p></center>
               <center> <button id='model-close' onClick={toggleModal}>Close</button></center>
            </NotificationModel>

        </div>

        <div className='dash_main'>

          <div className='one'>

            <div className='progress1'>

            </div>

            <div className='progress1'>

            </div>

            <div className='progress1'>

            </div>
          </div>


          {/* ✅ TRENDING */}
          <div className='trending'>
            <div className='dash_top'>
              <p id='header'>| Trending</p>
            </div>

          </div>

          {/* ✅ ACCOUNT */}
          <div className='account'>
            <div className='dash_top'>
              <p id='header'>| Account</p>
              <img src={notification} alt="" className="notification" />
            </div>

          </div>
        </div> </div>
    </div>
  )
}

export default Home