import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    ToggleActive = (linkID) => {
        let links = document.getElementsByClassName("nav-link");
        for (let i = 0; i < links.length; i++){
            links[i].classList.remove("active");
        }
        document.getElementById(linkID).classList.add("active");
    }

    render() { 
        return (
            <nav className="Navbar navbar navbar-expand-lg bg-dark p-3">
                <div className="container-fluid fs-5">
                    <ul className="navbar-nav mb-lg-0 w-100">
                        <li className="writer nav-item d-flex align-items-center col-12 col-lg-9">
                            {/* Scritta che si scrive da sola */}
                            <div className="typewriter">
                                <div>MANUEL BALDONI</div>
                            </div>
                        </li>
                        <li className="nav-item col-12 col-lg-1 mx-2">
                            <Link to="/" className="nav-link text-color-pink fw-light active" id="home" onClick={() => this.ToggleActive("home")}>HOME</Link>
                        </li>
                        <li className="nav-item col-12 col-lg-1 mx-2">
                            <Link to="/about" className="nav-link text-color-pink fw-light" id="about" onClick={() => this.ToggleActive("about")}>ABOUT</Link>
                        </li>
                        <li className="nav-item col-12 col-lg-1 mx-2">
                            <Link to="/contact" className="nav-link text-color-pink fw-light" id="contact" onClick={() => this.ToggleActive("contact")}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;