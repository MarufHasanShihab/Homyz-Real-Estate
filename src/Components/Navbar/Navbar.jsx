import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="nav__container innerWidth flexCenter paddings">
                <img src={logo} alt="logo" className="nav__logo" width={100} />
                <ul className="nav__menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#residencies">Residencies</a></li>
                    <li><a href="#our-value">Our Value</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#get-started">Get Started</a></li>
                    <li><a href=""><button className="button">Contact</button></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;