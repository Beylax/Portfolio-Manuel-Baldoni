import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
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

	render() {
		return (
			<div className="Home">
				<section className="position-relative mt-5 row g-0 align-items-center">
					<div className="Social col-md-2 g-0">
						<a
							className="col-4 col-md-12"
							href="https://github.com/Beylax"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={require("../Images/github-logo.png")}
								alt="https://github.com/Beylax"
							/>
						</a>
						<a
							className="col-4 col-md-12"
							href="https://www.linkedin.com/manuel-baldoni-765342245"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={require("../Images/linkedin-logo.png")}
								alt="www.linkedin.com/in/manuel-baldoni-765342245"
							/>
						</a>
						<a
							className="col-4 col-md-12"
							href="https://www.instagram.com/_baldo._/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={require("../Images/instagram-logo.png")}
								alt="https://www.instagram.com/_baldo._/"
							/>
						</a>
					</div>
					<div className="col-md-4">
						<img
							className="BaldoIMG"
							src={require("../Images/baldoni1.png")}
							alt="Baldo"
						/>
					</div>
					<div className="Title col-md-3 text-nowrap text-start">
						<div className="h1 text-color-blue fw-bold">
							DEVELOPER
						</div>
						<div className="h2 text-color-pink fw-bold">
							PER PASSIONE
						</div>
						<div className="h3 text-color-pink fw-light">
							FRONT-END EXPERT
						</div>
						<div className="row g-0 justify-content-between my-5 mx-5 mx-md-0">
							<Link to="/about#projects" className="btn btn-contact text-color-pink fw-bold py-3 px-4 col-md-5" onClick={() => this.ToggleActive("about")}>
								I MIEI PROGETTI
							</Link>
							<Link to="/contact" className="btn btn-pink-reverse text-color-pink fw-bold py-3 px-4 col-md-5" onClick={() => this.ToggleActive("contact")}>
								CONTATTATMI
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
