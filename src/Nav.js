import logo from "./Logo .svg"
import './Nav.css'

function Nav (){
    return(
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
                    <li className="list1"><b><a href="#">Home</a></b></li>
                    <li className="list1"><b><a href="#">About</a></b></li>
                    <li className="list1"><b><a href="#">Menu</a></b></li>
                    <li className="list1"><b><a href="#">Reservation</a></b></li>
                    <li className="list1"><b><a href="#">Order Online</a></b></li>
                    <li className="list1"><b><a href="#">Login</a></b></li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav;