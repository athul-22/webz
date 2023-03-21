import React from 'react'
import "./Styles/home.css"
import SideBar from './Components/SideBar'

function Home() {

  return (
    <div>
      {/* ✅ SIDEBAR */}
      <SideBar />
      <iframe src='https://www.adbit.in' className='frame' height="100vh" width="100%" title='s'>Not supported</iframe>
    </div>
  )
}

export default Home