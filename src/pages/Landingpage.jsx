import React from "react";
import BackgroundVideo from ".././components/bgVideo/BackgroundVideo";
import Login from ".././components/form/Login";
import Register from ".././components/form/Register";
import Container from "react-bootstrap/Container";

function Landingpage() {
	return (
		<>
			<BackgroundVideo />
			<Container>
				<Login />
				<Register />
			</Container>
		</>
	);
}

export default Landingpage;
