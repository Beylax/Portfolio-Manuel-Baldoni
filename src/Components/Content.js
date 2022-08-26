import { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./Content.css";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";

function Content() {
    const className = " Content ";
	const location = useLocation();

	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");
	}, [location, displayLocation]);

	return (
		<div
			className={`${transitionStage}` + className}
			onAnimationEnd={() => {
				if (transitionStage === "fadeOut") {
					setTransistionStage("fadeIn");
					setDisplayLocation(location);
				}
			}}
		>
			<Routes location={displayLocation}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default Content;
