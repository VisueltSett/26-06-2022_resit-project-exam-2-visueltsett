import React, { useState, useEffect } from "react";

//import components
import BackgroundVideo from ".././components/bgVideo/BackgroundVideo";
import Login from ".././components/form/Login";
import Register from ".././components/form/Register";

//import Bootstrap
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Landingpage() {
	//STATES
	const [key, setKey] = useState("");

	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [users, setUsers] = useState([]);

	//UseEffect runs once when app starts
	useEffect(() => {
		getUsersFromLocalStorage();
	}, []);

	//UseEffect runs when state is changed
	useEffect(() => {
		saveUsersToLocalStorage();
	}, [users]);

	//Saving users to localStorage and checking if there are any users already in localStorage

	const saveUsersToLocalStorage = () => {
		localStorage.setItem("users", JSON.stringify(users));
	};

	//Getting users from localStorage and checking if there are any users already in localStorage
	const getUsersFromLocalStorage = () => {
		if (localStorage.getItem("users") === (null || undefined)) {
			localStorage.setItem("users", JSON.stringify([]));
		} else {
			let registeredUsers = JSON.parse(localStorage.getItem("users"));
			setUsers(registeredUsers);
		}
	};

	return (
		<>
			<BackgroundVideo />
			<Container className="LogoContainer">
				{" "}
				<img
					src="../../../images/bitsbotslogo-white.svg"
					width="300"
					height="310"
					className="d-block align-center mx-auto mt-2"
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
						<Login
							userEmail={userEmail}
							userPassword={userPassword}
							setUserEmail={setUserEmail}
							setUserPassword={setUserPassword}
						/>
					</Tab>
					<Tab eventKey="register" title="Register">
						<Register
							userEmail={userEmail}
							userPassword={userPassword}
							setUserEmail={setUserEmail}
							setUserPassword={setUserPassword}
							users={users}
							setUsers={setUsers}
						/>
					</Tab>
				</Tabs>
			</Container>
		</>
	);
}

export default Landingpage;
