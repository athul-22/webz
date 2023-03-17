import './App.css';
import { Route, redirect } from 'react-router'
import swal from 'sweetalert';

function App() {

  if(localStorage.getItem("signin") !== "1" ){
    console.log("1");
   return <redirect to="/signin" />
  }

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
