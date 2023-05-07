import React from 'react';
import './App.css';
import { useNavigate } from 'react-router'
// import swal from 'sweetalert';
import { useEffect } from 'react';

function App() {
  //✅ FIRST TIME USER ACCOUNT NOT CREATED REDIRECTING TO LOGIN PAGE
    let navigate = useNavigate();
    useEffect(()=>{
      if(localStorage.getItem("signin") !== "1" ){
        navigate('/signin')
      }
      else{
        navigate('/home')
      }
    },[]);
      
  return (
    <div className="App">
      <h1>App</h1>
    <button ></button>
    </div>
  );
}

export default App;
