import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Home = () =>{
    let navigate = useNavigate();
    useEffect(() =>{
        if (!sessionStorage.getItem('idUser')) {
            return navigate("/login", { replace: true });
            //alert("You must logued first")
        }
    })
    
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
export default Home