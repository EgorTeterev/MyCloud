import Navbar from "../components/navbar/Navbar";
import './app.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from "../components/authorization/Registration";
import Login from "../components/authorization/Login";
import { useSelector } from "react-redux";


function App() {
  const isAuth  = useSelector(state=>state.user.isAuth)

  return (
    <BrowserRouter>
     <div className="app">
      <Navbar/>
      <div className="wrap">
        {!isAuth &&
        <Routes>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
