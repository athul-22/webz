import React from 'react'
import '../Styles/signinSuccess.css'
import successImg from '../Images/account.svg'
import verify from '../Images/verified.png'
import { useEffect } from 'react'

function SuccessNavigate() {

    useEffect(()=>{

        let name = localStorage.getItem("name");
        let nameText = document.getElementById("name");
        nameText.innerText = name;

        let email = localStorage.getItem("email");
        let emailText = document.getElementById("email");
        emailText.innerText = email;

    },[])
    
  return (
    <div>
        <img src={successImg} alt="11" height="450px" width="550px" id='mainImg' />
        <div className='wrapper'>
           
            <div className='top'>
            <center> <img src={verify} id='verified' alt=""/>
            <p className='title'>My Account</p></center>
            </div>

            <hr/>
            <center><p id='name'> Name: </p>
            <p id='email'></p></center>
            <hr id='hr1'/>

        </div>
    </div>
  )
}

export default SuccessNavigate