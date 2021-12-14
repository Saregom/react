//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "./components/css/styles.css"


function App() {

  const renderHead = () => {
    return(
      <Header/>
    )
  }

  return (
      <div className='body'>
        <Header/>
        
        <Router>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
