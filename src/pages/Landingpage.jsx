import React from "react";
import BackgroundVideo from ".././components/bgVideo/BackgroundVideo";
import Login from ".././components/form/Login";
import Register from ".././components/form/Register";
import Container from "react-bootstrap/Container";

function Landingpage() {
	return (
		<>
			<BackgroundVideo />
			<Container className="LogoContainer">
				{" "}
				<img
					src="../../../images/bitsbotslogo-white.svg"
					width="290"
					height="300"
					className="d-block align-center mx-auto mt-5"
					alt="Bitsbots logo"
				/>
			</Container>
			<Container className="row justify-content-around">
				<Login />
				<Register />
			</Container>
		</>
	);
}

export default Landingpage;
