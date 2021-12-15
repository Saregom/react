import './App.css';
import "./components/css/styles.css"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import Tables from './components/Tables';

function App() {
  /* let navigate = useNavigate(); */
  /* if (!sessionStorage.getItem('idUser')) {
    navigate("/", { replace: true }); */
    //alert("You must logued first")
  /* } */
  const [head, setHead ] = useState("");
  const location = useLocation();

  useEffect(() => {
    let location2 = window.location.pathname
    if(location2 !== "/" && location2 !== "/signin"){
      setHead(<Header/>)
    }else{
      setHead("")
    }
  }, [location]);
  
  return (
      <div className='body'>
        {head}
        {/* <Router> is defined in index.js  */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
      </div>
  );
}

export default App;
