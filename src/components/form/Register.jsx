import React from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import formStyles from "./Form.module.scss";
import BtnPrimary from "../buttons/BtnPrimary";

function Register() {
	return (
		<>
			<Form
				id="registerForm"
				className={`${formStyles.form} ${formStyles.registerForm}`}
			>
				<Heading title="Register" size="2" />
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="confirmPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm password" />
				</Form.Group>
				<BtnPrimary buttonLabel="Register" />
			</Form>
		</>
	);
}

export default Register;
