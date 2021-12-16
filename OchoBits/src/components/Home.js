import { NavLink, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Orders from './Orders';
import Tables from './Tables';

const Home = () =>{
    /* let navigate = useNavigate();
    useEffect(() =>{
        if (!sessionStorage.getItem('idUser')) {
            return navigate("/", { replace: true });
            //alert("You must logued first")
        }
    }) */
    const Welcome = () =>{
        return(
            <div className="main main-home">
                <div className="main2-home">
                    <h1 className="welcome">Welcome to Ocho Bits web page!!</h1>
                    <h2 className="welcome2">Start by navigating through the menu</h2>
                </div>
                <NavLink className="txt" exact="true" to="/"><button className="btn-index btn-green">Logout</button></NavLink>
            </div>
        )
    }
    
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="tables/*" element={<Tables />} />
            <Route path="orders/*" element={<Orders />} />
        </Routes>
        
        </>
    )
}



export default Home