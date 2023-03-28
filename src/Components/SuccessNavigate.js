import React from 'react'
import '../Styles/signinSuccess.css'
import successImg from '../Images/account.svg'
import verify from '../Images/verified.png'
import { useEffect } from 'react'

function SuccessNavigate() {

    useEffect(()=>{

        let name = localStorage.getItem("name");
        let nameText = document.getElementById("names");
        nameText.innerText = name;

        let email = localStorage.getItem("email");
        let emailText = document.getElementById("emails");
        emailText.innerText = email;

    },[])

    function homeFun(){
        window.location.replace('/home')
    }
    
  return (
    <div>
        <img src={successImg} alt="11" height="450px" width="550px" id='mainImg' />
        <div className='wrapper'>
           
            <div className='top'>
            <center> <img src={verify} id='verified' alt=""/>
            <p className='title'>Account Created </p></center>
            </div>

            <hr/>
            <center><p id='names'> Name: </p>
            <p id='emails'></p></center>
            <hr id='hr1'/>
            <center><button onClick={homeFun} id='explore'>Explore</button></center>

        </div>
    </div>
  )
}

export default SuccessNavigate