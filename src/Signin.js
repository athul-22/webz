import React from 'react'
import swal from 'sweetalert'
import './Styles/signin.css';
import main from './Images/MAIN.png'
import gicon from './Images/gicon.webp'
import { useGoogleLogin } from '@react-oauth/google';

function Signin() {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: tokenResponse => console.log(tokenResponse),
    flow: 'auth-code',
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
      <div onClick={() => login()} className='gform'>
      <img src={gicon} height="40px" width="40px" className="gicon" alt=''/>
      <p id='gtext'>Continue with Google</p>
     </div>
        <img src={main} className="main-img" alt=''/>
    </div>
  )
}

export default Signin