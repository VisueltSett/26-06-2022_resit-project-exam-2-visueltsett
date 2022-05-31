import React from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import formStyles from "./Form.module.scss";

function Register() {
	return (
		<>
			<Form className={formStyles.form}>
				<Heading title="Register" size="2" />
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Repeat password" />
				</Form.Group>
			</Form>
		</>
	);
}

export default Register;
