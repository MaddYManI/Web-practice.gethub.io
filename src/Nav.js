import logo from "./Logo .svg"
import './Nav.css'
import { Routes,Route,Link, BrowserRouter} from 'react-router-dom'
import Homepage from "./Nav/Homepage"
import Aboutme from "./Nav/Aboutme"
import Login from "./Nav/Login"
import Menu from "./Nav/Menu"
import Order_online from "./Nav/Order_Online"
import { useState,useReducer,useEffect} from 'react';
import BookingPage from "./Nav/BookingPage"

function Nav (){

    return(
        <BrowserRouter>
            <header className="box2">
                <input type="checkbox" id="toggle"/>
                <nav className="containers">
                    <label className="navbar-toggle" for="toggle">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <img src={logo} alt ="Logo" />
                        <ul className="lists">
                            <li className="list1"><b><Link to='/'className="links">Home</Link></b></li>
                            <li className="list1"><b><Link to='/aboutme' className="links">Aboutme</Link></b></li>
                            <li className="list1"><b><Link to='/menu' className="links">Menu</Link></b></li>
                            <li className="list1"><b><Link to='/BookingPage' className="links" data-testid="resv btn">Reservation</Link></b></li>
                            <li className="list1"><b><Link to='/order_online' className="links">Order Online</Link></b></li>
                            <li className="list1"><b><Link to='/login' className="links">Login</Link></b></li>
                        </ul>
                </nav>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/aboutme" element={<Aboutme />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/BookingPage" element={<BookingPage/>} />
                        <Route path="/order_online" element={<Order_online />} />
                        <Route path="/login" element={<Login/>} />
                    </Routes>
            </header>
        </BrowserRouter>
    )
}
export default Nav;