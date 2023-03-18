import React from 'react'
import '../Styles/signinSuccess.css'
import successImg from '../Images/account.svg'
import verify from '../Images/verified.png'

function SuccessNavigate() {
  return (
    <div>
        <img src={successImg} alt="11" height="450px" width="550px" id='mainImg' />
        <div className='wrapper'>
           
            <div className='top'>
         <img src={verify} id='verified' alt=""/>
            <p id='Success'>My Account</p>
            </div>

            <hr/>
            <p id='name'></p>
            <p id='email'></p>
            
        </div>
    </div>
  )
}

export default SuccessNavigate