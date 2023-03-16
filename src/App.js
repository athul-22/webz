import './App.css';
import { redirect } from 'react-router-dom';
import swal from 'sweetalert';

function App() {

  if(localStorage.getItem("signin") !== "1" ){
    swal("Create Account", "Create Account with Google", "info");
    return <redirect to="/signin"/>
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
