import './App.css';
import {redirect, useNavigate } from 'react-router'
import swal from 'sweetalert';
import { useEffect } from 'react';

function App() {


    let navigate = useNavigate();
    useEffect(()=>{
      if(localStorage.getItem("signin") !== "1" ){
        navigate('/signin')
      }
      else{
        alert("done");
      }
    },[])


    // const accountCredCheck = (e) =>{
     
    // }

      
  return (
    <div className="App">
      <h1>app</h1>
    <button ></button>
    </div>
  );
}

export default App;
