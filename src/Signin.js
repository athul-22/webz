import React from 'react'
import swal from 'sweetalert'
import './Styles/signin.css';
import main from './Images/MAIN.png'

function Signin() {
  return (
    <div>
        <div className="form">
          <div className='f-header'>
            <center><p >SignIn</p></center>
          </div>
        </div>
        <img src={main} className="main-img" alt=''/>
    </div>
  )
}

export default Signin