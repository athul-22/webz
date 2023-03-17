import './App.css';
import {redirect } from 'react-router'
import swal from 'sweetalert';

function App() {
    
      if(localStorage.getItem("signin") !== "1" ) {
        redirect("/signin");
      }


      
  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
