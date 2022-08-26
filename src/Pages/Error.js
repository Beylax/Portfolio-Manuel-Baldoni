import React from "react";
import "./Error.css";

class Error extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="Error">PAGE NOT FOUND</div>;
	}
}

export default Error;
