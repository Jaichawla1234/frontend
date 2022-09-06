
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
      <button onClick={callApi}>call api</button>
        <Routes>
          <Route path="/messenger/login" element={<Login />}/>
          <Route path="/messenger/register" element={<Register/>}/>
          <Route path="/" element={ <ProtectRoute> <Messenger /> </ProtectRoute> } />
            
          
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}


function callApi() {
  fetch('https://chat-app-it-b-c.herokuapp.com/',{
    method:'GET'})
    .then(data=>alert(JSON.stringify(json)))
}

export default App;

