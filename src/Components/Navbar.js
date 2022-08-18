import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <nav className="Navbar navbar navbar-expand-lg bg-dark p-3">
                <div className="container-fluid fs-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-lg-0 w-100 justify-content-evenly">
                            <li className="nav-item d-flex align-items-center justify-content-center">
                                {/* Scritta che si scrive da sola */}
                                <div className="typewriter text-center">
                                    <div>Manuel Baldoni</div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-color-pink">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-color-pink">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-color-pink">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;