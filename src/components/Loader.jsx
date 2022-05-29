import React from "react";
import Container from "react-bootstrap/Container";

function Loader() {
	return (
		<Container className="loader_container">
			<div className="loader">
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
			</div>
		</Container>
	);
}

export default Loader;
