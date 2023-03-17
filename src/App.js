import './App.css';
import {redirect } from 'react-router'
import swal from 'sweetalert';

function App() {

  
    
      if (localStorage.getItem("signin") !== "1" ) {
        return redirect("/login");
      }

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
