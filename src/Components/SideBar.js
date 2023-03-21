import React from "react";
import '../Styles/sidebar.css'
import dashboard from '../Images/dashboard.png'
import user from '../Images/user.png'
import fire from '../Images/fire.png'
import profile from '../Images/profile.png'

function mySideNav(){
    return(
        <div className="main">
            <div className="sidenav">
                <div className="user">
                  <center><img className="profile" src={profile} height="60px" width="60px" alt=""/><br/></center> 
                    <center><p className="nam">Athul Nambiar</p></center>
                    <center><p className="mail">adbit.tesa@gmail.com</p></center>
                </div>
               
                <ul>
                    <li><img height="50px" width="50px" alt="" src={dashboard}/><p>Dashboard</p></li>
                    <li><img height="50px" width="50px" alt="" src={fire}/><p>Trending</p></li>
                    <li><img height="50px" width="50px" alt="" src={user}/><p>Account</p></li>
                </ul>
            {/* ✅ LOGOUT - BOTTOM NAV */}
                <ul>
                    <li>Logout</li>
                </ul>
                
            </div>
        </div>
    )
}

export default mySideNav;