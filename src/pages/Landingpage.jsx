import React, { useState } from "react";
import BackgroundVideo from ".././components/bgVideo/BackgroundVideo";
import Login from ".././components/form/Login";
import Register from ".././components/form/Register";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Landingpage() {
	const [key, setKey] = useState("");

	return (
		<>
			<BackgroundVideo />
			<Container className="LogoContainer">
				{" "}
				<img
					src="../../../images/bitsbotslogo-white.svg"
					width="270"
					height="280"
					className="d-block align-center mx-auto mt-5"
					alt="Bitsbots logo"
				/>
			</Container>
			<Container>
				<Tabs
					id="landingpage-tabs"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-3"
				>
					<Tab eventKey="login" title="Login">
						<Login />
					</Tab>
					<Tab eventKey="register" title="Register">
						<Register />
					</Tab>
				</Tabs>
			</Container>
		</>
	);
}

export default Landingpage;
