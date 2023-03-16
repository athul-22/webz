import React from 'react'
import "./Styles/home.css"
import { Route, Redirect } from 'react-router'
import swal from 'sweetalert';
import signin from './Signin';

function Home() {
  if(localStorage.getItem("signin") !== "1" ){
    return <Redirect to="/signin" />
  }
  swal("Create Account", "Create Account with Google", "success");
  return (
    <div>
      
        <h1 id="h">home</h1>
        </div>
  )
}

export default Home