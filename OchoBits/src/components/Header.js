import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from './sources/logo-ochobits2.svg';
import { NavLink } from 'react-router-dom';
/* import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, Button, FormControl } from 'react-bootstrap'; */

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
                    <NavLink className="txt-menu" exact="true" to="/tables">Tables</NavLink>
                    {/* <a className="txt-menu tm-users"><span>Tables</span></a> */}
                    {/* <a href="javascript:getUsers();" className="txt-menu tm-users"><span>Users</span></a>
                    <a href="javascript:getLaptops();" className="txt-menu tm-laptop" ><span>Laptops</span></a> */}
                   {/*  <a className="txt-menu tm-orders"><span>Orders</span></a> */}
                </nav>
                <div className="nav-menu-popup"></div>
                <nav className="nav-menu-left">
                    {/* <a href={mainChanger('tables.html')} className="txt-menu-left tm-users"><span>Tables</span></a> */}
                    {/* <a href="javascript:getUsers();" className="txt-menu-left tm-users"><span>Users</span></a>
                    <a href="javascript:getLaptops();" className="txt-menu-left tm-laptop"><span>Laptops</span></a> */}
                    {/* <a href={mainChanger('orders.html')} className="txt-menu-left tm-orders"><span>Orders</span></a> */}
                </nav>
                <div className="menu-logo-user">
                    {/* <i className="fas fa-user-circle"></i> */}
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