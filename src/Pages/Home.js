import React from "react";
import "./Home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Home">
                <section className="position-relative mt-5 row g-0 align-items-center">
                    <div className="Social col-md-2">
                        <a href="https://github.com/Beylax" target="_blank" rel="noreferrer">
                            <img src={require("../Images/github-logo.png")} alt="https://github.com/Beylax"/>
                        </a>
                        <a href="https://www.linkedin.com/manuel-baldoni-765342245" target="_blank" rel="noreferrer">
                            <img src={require("../Images/linkedin-logo.png")} alt="www.linkedin.com/in/manuel-baldoni-765342245"/>
                        </a>
                        <a href="https://www.instagram.com/_baldo._/" target="_blank" rel="noreferrer">
                            <img src={require("../Images/instagram-logo.png")} alt="https://www.instagram.com/_baldo._/"/>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <img className="BaldoIMG" src={require("../Images/baldoni1.png")} alt="Baldo" />
                    </div>
                    <div className="Title col-md-3 text-nowrap">
                        <div className="h1 text-color-blue fw-bold">DEVELOPER</div>
                        <div className="h2 text-color-pink fw-bold">PER PASSIONE</div>
                        <div className="h3 text-color-pink fw-light">FRONT-END EXPERT</div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Home;