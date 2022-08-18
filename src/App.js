import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
    return (
      <div className="App fs-1 text-center">
        <Navbar/>
        <Routes>
					<Route path="/" element={<Home />} />
				</Routes>
      </div>
    );
	}
}

export default App;