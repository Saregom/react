import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from './sources/logo-ochobits2.svg';
import { NavLink } from 'react-router-dom';

const Header = () =>{

    return(
        <header className="header">
            <div className="div-bars-logo">
                <div className="div-bars">
                    <FontAwesomeIcon className="fas fa-bars" icon={ faBars }/>
                </div>
                <Logo className="logo-header" alt='logo Ocho Bits'/>
            </div>
            <div className="nav-father">
                <nav className="nav-menu">
                    <NavLink className="txt-menu" exact="true" to="/home/tables">Tables</NavLink>
                    <NavLink className="txt-menu" exact="true" to="/home/orders">Orders</NavLink>
                </nav>
                <div className="nav-menu-popup"></div>
                <nav className="nav-menu-left">
                    <NavLink className="txt-menu" exact="true" to="/home/tables">Tables</NavLink>
                    <NavLink className="txt-menu" exact="true" to="/home/orders">Orders</NavLink>
                </nav>
                <div className="menu-logo-user">
                    <FontAwesomeIcon className="fas fa-user-circle" icon={ faUserCircle }/>
                </div>
                <div className="div-menu-user">
                    <label className="txt-menu t-m-name"><span>juanito</span></label>
                    
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
            <div className="nav-menu-popup2"></div>
            <div className="info-user">
            </div>
        </header>
    )
}

export default Header;