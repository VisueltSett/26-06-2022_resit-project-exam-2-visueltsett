import React from "react";

//import components
import Heading from "../heading/Heading";
import BtnPrimary from "../buttons/BtnPrimary";
import { registerSchema } from "./Schemas";
//import { useLocalStorage } from "../utils/useLocalStorage";

//import styles
import formStyles from "./Form.module.scss";

//import Bootstrap
import Form from "react-bootstrap/Form";

//import Formik
import { useFormik } from "formik";

function Register({
	userEmail,
	setUserEmail,
	setUserPassword,
	users,
	setUsers,
}) {
	const onSubmit = async (values, actions) => {
		if (values.email === userEmail) {
			alert(
				"This email address is already registered, please try  again with a different email address, or double check your password"
			);
		} else {
			setUserEmail(values.email);
			setUserPassword(values.password);

			const newUser = {
				email: values.email,
				password: values.password,
			};
			setUsers([...users, newUser]);
		}

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
			confirmPassword: "",
		},
		validationSchema: registerSchema,
		onSubmit,
	});

	console.log(errors);

	return (
		<Form
			className={`${formStyles.form} ${formStyles.registerForm}`}
			onSubmit={handleSubmit}
		>
			<Heading title="Register" size="2" />
			<Form.Group className="mb-3" controlId="email">
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

			<Form.Group className="mb-3" controlId="password">
				<Form.Label>
					Password <br />
					<span className={formStyles.formNote}>
						(min 8 characters, 1 uppercase and 1 lowercase letter, 1 number)
					</span>
				</Form.Label>
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
					placeholder="Enter password"
				/>
				{errors.password && touched.password && (
					<p className={formStyles.error}>{errors.password}</p>
				)}
			</Form.Group>
			<Form.Group className="mb-3" controlId="confirmPassword">
				<Form.Label>Confirm password</Form.Label>
				<Form.Control
					value={values.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.confirmPassword && touched.confirmPassword
							? `${formStyles.formControlError}`
							: !errors.confirmPassword && touched.confirmPassword
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="confirmPassword"
					type="password"
					placeholder="Confirm password"
				/>
				{errors.confirmPassword && touched.confirmPassword && (
					<p className={formStyles.error}>{errors.confirmPassword}</p>
				)}
			</Form.Group>
			<BtnPrimary
				buttonLabel={isSubmitting ? "Sending..." : "Register"}
				disabled={
					isSubmitting ||
					!isValid ||
					(Object.keys(touched).length === 0 && touched.constructor === Object)
				}
			/>
		</Form>
	);
}

export default Register;
