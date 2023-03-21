import React from 'react'
import "./Styles/home.css"
import SideBar from './Components/SideBar'
import './Styles/sidebar.css';
import dashboard from './Images/dashboard.png'
import user from './Images/user.png'
import fire from './Images/fire.png'
import profile from './Images/profile.png'
import $ from 'jquery';

function Home() {

  let home = document.getElementsByClassName("dashboard");
  let trending = document.getElementsByClassName("trending");
  let account = document.getElementsByClassName("account");

  function dashFun(){
    $(".dashboard").css("display", "block");
    $(".trending").css("display", "none");
    $(".account").css("display", "none");
  }

  function trendFun(){
    $(".dashboard").css("display", "none");
    $(".trending").css("display", "block");
    $(".account").css("display", "none");
  }

  function accFun(){
    $(".dashboard").css("display", "none");
    $(".trending").css("display", "none");
    $(".account").css("display", "block");
  }

  return (
    
    <div>
        {/* ✅ SIDEBAR STARTING */}
        <div className="sidenav">
                <div className="user">
                  <center><img className="profile" src={profile} height="60px" width="60px" alt=""/><br/></center> 
                    <center><p className="nam">Athul Nambiar</p></center>
                    <center><p className="mail">adbit.tesa@gmail.com</p></center>
                </div>
               
                <ul>
                    <li onClick={dashFun}><img height="50px" width="50px" alt="" src={dashboard}/><p>Dashboard</p></li>
                    <li onClick={trendFun}><img height="50px" width="50px" alt="" src={fire}/><p>Trending</p></li>
                    <li onClick={accFun}><img height="50px" width="50px" alt="" src={user}/><p>Account</p></li>
                </ul>

            {/* ✅ LOGOUT - BOTTOM NAV */}
                <ul>
                    <li>Logout</li>
                </ul>
            </div>
     
    {/* ✅ DASHBOARD */} 
    <div className='dashboard'>
      <p id='header'>| Dashbaord</p>
    </div>

    {/* ✅ TRENDING */} 
    <div className='trending'>
    <p id='header'>| Trending</p>
    </div>

    {/* ✅ ACCOUNT */} 
    <div className='account'>
    <p id='header'>| My Account</p>
    </div>

    </div>
  )
}

export default Home