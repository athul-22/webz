import React ,{ useEffect }  from 'react';
import './App.css';
import { useNavigate } from 'react-router'
import { Switch, Route } from 'react-router-dom';
// import swal from 'sweetalert';w

function App() {
  //✅ FIRST TIME USER ACCOUNT NOT CREATED REDIRECTING TO LOGIN PAGE
  const navigate = useNavigate();
    useEffect(()=>{
      if(localStorage.getItem("signin") !== "1" ){
        navigate('/signin')
      }
      else{
        navigate('/home')
      }
    },[navigate]);
      
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
