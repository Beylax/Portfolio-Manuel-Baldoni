import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App fs-1 text-center">
				<Navbar />
				<Content />
			</div>
		);
	}
}

export default App;
