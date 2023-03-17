import React from 'react'
import swal from 'sweetalert'
import './Styles/signin.css';
import main from './Images/MAIN.png'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';


function Signin() {

  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};


useGoogleOneTapLogin({
  onSuccess: credentialResponse => {
    console.log(credentialResponse);
  },
  onError: () => {
    console.log('Login Failed');
  },
});

  return (
    <div>
        {/* MANUAL LOGIN FORM */}
        <div className="form">
          <div className='f-header'>
            <center><p className='f-title'>⎯  Sign In ⎯</p></center>
            <center><p className='f-des'>Create account to access full features</p></center>
            <center><input placeholder='Name' className='name' type="text"/></center>
            <center><input placeholder='email'  className='email' type="email" required/></center>
            <center><button className='signin'> Sign In</button></center>
          </div>
        </div>

        {/* GOOGLE LOGIN FORM */}
     <div className='gform'></div>
        <img src={main} className="main-img" alt=''/>
    </div>
  )
}

export default Signin