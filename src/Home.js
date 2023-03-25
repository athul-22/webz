import React from 'react'
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
import Calender from './Components/Calender'
import CalendarIcon from './Images/calendar.png';

function Home() {


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
          <center><p className="nam">Athul Nambiar</p></center>
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


      {/* ✅ DASHBOARD */}
      <div className='dashboard'>
        <div className='dash_top'>
          <p className='dashboard' id='header'>| Dashbaord</p>
          <img src={CalendarIcon} alt="" className="calender" />
          <img src={notification} alt="" className="notification" />
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

          <Calender/>

          {/* ✅ TOOLS SECTION STARTS */}
          <p id='premium'>| Twitter Tools</p>
          <div className='two'>

            <div className='pro1'>
             <center><img className='twitter' src={twitter} height="60px" width="60px" alt=""/><br/></center>
             <center><p id='t_tool_name'>Profile Extractor</p></center>
            </div>

            <div className='pro1'>
            <center><img className='twitter' src={twitter} height="60px" width="60px" alt=""/><br/></center>
             <center><p id='t_tool_name'>Profile Extractor</p></center>
            </div>

            <div className='pro1'>
            <center><img className='twitter' src={twitter} height="60px" width="60px" alt=""/><br/></center>
             <center><p id='t_tool_name'>Profile Extractor</p></center>
            </div>

            <div className='pro1'>
            <center><img className='twitter' src={twitter} height="60px" width="60px" alt=""/><br/></center>
             <center><p id='t_tool_name'>Profile Extractor</p></center>
            </div>

            <div className='pro1'>
            <center><img className='twitter' src={twitter} height="60px" width="60px" alt=""/><br/></center>
             <center><p id='t_tool_name'>Profile Extractor</p></center>
            </div>
          </div>   
        </div>

      </div>

      {/* ✅ TRENDING */}
      <div className='trending'>
        <div className='dash_top'>
          <p id='header'>| Trending</p>
          <img src={notification} alt="" className="notification" />
        </div>

      </div>

      {/* ✅ ACCOUNT */}
      <div className='account'>
        <div className='dash_top'>
          <p id='header'>| Account</p>
          <img src={notification} alt="" className="notification" />
        </div>

      </div>

    </div>
  )
}

export default Home