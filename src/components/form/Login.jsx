import React, { useState } from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import formStyles from "./Form.module.scss";
import BtnPrimary from "../buttons/BtnPrimary";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";

function Login() {
	const validationSchema = Yup.object({
		name: Yup.string().required(),
		email: Yup.string().email().required(),
		password: Yup.string().min(8).max(15).required(),
		confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
		title: Yup.string().required(),
		review: Yup.string().required(),
		rating: Yup.number().min(1).max(10).required(),
		date: Yup.date().default(() => new Date()),
		wouldRecommend: Yup.boolean().default(false),
	});

	const initialValues = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		//rating: "",
		//date: new Date(),
		//wouldRecommend: false,
		//product: "",
	};

	const onSubmit = (values) => {
		alert(JSON.stringify(values));
	};

	const renderError = (message) => <p className="error warning">{message}</p>;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm }) => {
				await onSubmit(values);
				resetForm();
			}}
		>
			<Form className={formStyles.form}>
				<Heading title="Login" size="2" />
				<Form.Group className="mb-3" controlId="Email">
					<Form.Label>Email address</Form.Label>
					<Form.Control name="email" type="email" placeholder="Enter email" />
					<ErrorMessage name="email" render={renderError} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="Password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
					/>
					<ErrorMessage name="password" render={renderError} />
				</Form.Group>
				<BtnPrimary buttonLabel="Login">Login</BtnPrimary>
			</Form>
		</Formik>
	);
}

export default Login;
