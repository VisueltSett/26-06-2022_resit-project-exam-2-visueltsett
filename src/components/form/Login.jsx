import React from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import formStyles from "./Form.module.scss";
import BtnPrimary from ".././buttons/BtnPrimary";

function Login() {
	return (
		<>
			<Form className={formStyles.form}>
				<Heading title="Login" size="2" />
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<BtnPrimary title="Login" />
			</Form>
		</>
	);
}

export default Login;
