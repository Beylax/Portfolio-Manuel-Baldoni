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
                <section>
                    <img className="BaldoIMG" src={require("../Images/manuelbaldoni.png")} alt="Baldo"/>
                </section>
            </div>
        );
    }
}
 
export default Home;