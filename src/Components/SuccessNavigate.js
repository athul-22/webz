import React from 'react'
import { useNavigate } from 'react-router-dom'

function SuccessNavigate() {
    let navigate = useNavigate();
    if(localStorage.getItem("signin") === "1" ){
        navigate('/home')
      }
      else{
        alert("login faled")
      }
   

  return (
    <div></div>
  )
}

export default SuccessNavigate