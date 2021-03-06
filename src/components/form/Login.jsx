import React from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import formStyles from "./Form.module.scss";
import BtnPrimary from "../buttons/BtnPrimary";
import { useFormik } from "formik";
import { loginSchema } from "./Schemas";

function Login(userEmail, userPassword, setUserEmail, setUserPassword) {
	const onSubmit = async (values, actions) => {
		/*	let registeredUsers = JSON.parse(localStorage.getItem("users"));
			registeredUsers.map(
				(user) => {if(user.email === userEmail && user.password === userPassword
			)
		) {
			alert("Success");
		} else {
			alert("Wrong login credentials, please try again.");
		}*/

		console.log(values);
		console.log(actions);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		actions.resetForm();
	};

	const {
		values,
		errors,
		touched,
		isSubmitting,
		isValid,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit,
	});

	console.log(errors);

	return (
		<Form className={formStyles.form} onSubmit={handleSubmit}>
			<Heading title="Login" size="2" />
			<Form.Group className="mb-3" controlId="Email">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.email && touched.email
							? `${formStyles.formControlError}`
							: !errors.email && touched.email
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="email"
					type="email"
					placeholder="Enter email"
				/>
				{errors.email && touched.email && (
					<p className={formStyles.error}>{errors.email}</p>
				)}
			</Form.Group>
			<Form.Group className="mb-3" controlId="Password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.password && touched.password
							? `${formStyles.formControlError}`
							: !errors.password && touched.password
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="password"
					type="password"
					placeholder="Password"
				/>
				{errors.password && touched.password && (
					<p className={formStyles.error}>{errors.password}</p>
				)}
			</Form.Group>

			<BtnPrimary
				buttonLabel={isSubmitting ? "Sending..." : "Login"}
				disabled={
					isSubmitting ||
					!isValid ||
					(Object.keys(touched).length === 0 && touched.constructor === Object)
				}
			/>
		</Form>
	);
}

export default Login;
