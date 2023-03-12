import logo from "./Logo.png"
import './Nav.css'

function Nav (){
    return(
        <>
            <nav className="containers">
                <img src={logo} alt ="Logo" />
                <ul>
                    <li><b><a href="">Home</a></b></li>
                    <li><b><a href="#">About</a></b></li>
                    <li className="test" ><b><a href="#">Menu</a></b></li>
                    <li><b><a href="#">Reservation</a></b></li>
                    <li><b><a href="#">Order Online</a></b></li>
                    <li><b><a href="#">Login</a></b></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;