import './App.css';
import {redirect, useNavigate } from 'react-router'
import swal from 'sweetalert';
import { useEffect } from 'react';

function App() {

  //✅ FIRST TIME USER ACCOUNT NOT CREATED REDIRECTING TO LOGIN PAGE
    let navigate = useNavigate();
    useEffect(()=>{
      if(localStorage.getItem("signin") !== "1" ){
        navigate('/home')
      }
      else{
        navigate('/home')
      }
    },[]);

    
      
  return (
    <div className="App">
      <h1>app</h1>
    <button ></button>
    </div>
  );
}

export default App;
