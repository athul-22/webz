import React from 'react'
import "./Styles/home.css"
import SideBar from './Components/SideBar'

function Home() {

  let dashboard = document.getElementsByClassName("dashboard");
  let trending = document.getElementsByClassName("trending");
  let account = document.getElementsByClassName("account");

  return (
    <div>
      {/* ✅ SIDEBAR */}
      <SideBar />
     
    <div className='dashboard'>
      <h1>dashboard</h1>
    </div>

    <div className='trending'>
      <h1>dashboard</h1>
    </div>

    <div className='account'>
      <h1>dashboard</h1>
    </div>

    </div>
  )
}

export default Home