import React, { useState } from 'react'
import swal from 'sweetalert'
import './Styles/signin.css';
import main from './Images/MAIN.png'
import gicon from './Images/gicon.webp'
import { useGoogleLogin } from '@react-oauth/google';
import LoginError from './Components/LoginError';

function Signin() {
  
  const [name , setName ] = useState();
  const [email , setEmail ] = useState();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: tokenResponse => console.log(tokenResponse),
    onClick:tokenResponse => console.log(tokenResponse),
    //onNonOAuthError:tokenResponse => <LoginError/>,
    onChange:tokenResponse => console.log(tokenResponse),
    
  });

  function fbFun() {
    const fbUrl = 'https://todoapp-fb470-default-rtdb.firebaseio.com/' + name + '.json?'
    fetch(fbUrl,
    {
        method: "PUT",
        body: JSON.stringify({
            name,
            email,        
        })
    })
    localStorage.setItem("signin","1");
}

  return (
    <div>
        {/* MANUAL LOGIN FORM */}
        <div className="form">
          <div className='f-header'>
            <center><p className='f-title'>⎯  Sign In ⎯</p></center>
            <center><p className='f-des'>Create account to access full features</p></center>
            <center><input o placeholder='Name' className='name' type="text" value={name} required onChange={e => setName(e.target.value)}/></center>
            <center><input placeholder='email'  className='email' type="email" required value={email} onChange={e => setEmail(e.target.value)}/></center>
            <center><button onClick={fbFun} className='signin'> Sign In</button></center>
          </div>
        </div>

      {/* GOOGLE LOGIN FORM */}
      <div onClick={login} className='gform'>
      <img src={gicon} height="40px" width="40px" className="gicon" alt=''/>
      <p id='gtext'>Continue with Google</p>
     </div>
        <img src={main} className="main-img" alt=''/>
    </div>
  )
}

export default Signin