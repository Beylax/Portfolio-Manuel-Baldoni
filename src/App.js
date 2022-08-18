import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
    return (
      <div className="App fs-1 text-center">
        Ciao DPT
      </div>
    );
	}
}

export default App;