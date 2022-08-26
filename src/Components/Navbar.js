import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	ToggleActive = (linkID) => {
		let links = document.getElementsByClassName("nav-link");
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		document.getElementById(linkID).classList.add("active");
	};

	ToggleNavbar = () => {
		let NavContainer = document.getElementById("NAV_CONTAINER");
		NavContainer.classList.toggle("nav-close");

        let btn = document.getElementById("BTN_NAVBAR");
        btn.classList.toggle("rotate");
		if (NavContainer.classList.contains("nav-close")) {
			btn.innerHTML = "&#8212;";
		} else {
			btn.innerHTML = "&#10005;";
		}
	};

	render() {
		return (
			<nav className="Navbar navbar navbar-expand-lg bg-dark p-3">
				<div id="NAV_CONTAINER" className="container-fluid fs-5">
					<ul className="navbar-nav mb-lg-0 w-100">
						<li className="writer nav-item d-flex align-items-center col-12 col-lg-9">
							{/* Scritta che si scrive da sola */}
							<div className="typewriter">
								<div>MANUEL BALDONI</div>
							</div>
						</li>
						<li className="nav-item col-12 col-lg-1">
							<Link
								to="/"
								className="nav-link text-color-pink fw-light active"
								id="home"
								onClick={() => this.ToggleActive("home")}
							>
								HOME
							</Link>
						</li>
						<li className="nav-item col-12 col-lg-1">
							<Link
								to="/about"
								className="nav-link text-color-pink fw-light"
								id="about"
								onClick={() => this.ToggleActive("about")}
							>
								ABOUT
							</Link>
						</li>
						<li className="nav-item col-12 col-lg-1">
							<Link
								to="/contact"
								className="nav-link text-color-pink fw-light"
								id="contact"
								onClick={() => this.ToggleActive("contact")}
							>
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
				<div
					id="BTN_NAVBAR"
					className="text-color-pink text-center m-auto"
					onClick={this.ToggleNavbar}
				>
					&#10005;
				</div>
			</nav>
		);
	}
}

export default Navbar;
