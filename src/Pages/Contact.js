import React from "react";
import "./Contact.css";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Contact row g-0 fs-4">
				<div>Email</div>
				<input type="email" className="input col-12" required />
				<div className="col-12 col-md-5">
					<div>Nome</div>
					<input type="text" className="input" />
				</div>
				<div className="col-0 col-md-2"></div>
				<div className="col-12 col-md-5">
					<div>Cognome</div>
					<input type="text" className="input" />
				</div>
				<div>Oggetto</div>
				<input type="text" className="input col-12" required />
				<div>Messaggio</div>
				<textarea className="input col-12" required />
				<button className="btn btn-blue my-5">INVIO</button>
			</div>
		);
	}
}

export default Contact;
