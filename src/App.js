
import {BrowserRouter,HashRouter, Routes, Route,} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />}/>
          <Route path="/messenger/register" element={<Register/>}/>
          <Route path="/" element={ <ProtectRoute> <Messenger /> </ProtectRoute> } />
            
          
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;

{/* <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />}/>
          <Route path="/messenger/register" element={<Register/>}/>
          <Route path="/" element={ <ProtectRoute> <Messenger /> </ProtectRoute> } />
            
          
        </Routes>
      </BrowserRouter> */}

