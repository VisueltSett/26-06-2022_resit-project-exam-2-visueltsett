import React from "react";
import Heading from "../heading/Heading";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import formStyles from "./Form.module.scss";
import BtnPrimary from "../buttons/BtnPrimary";
import { FiShoppingCart } from "react-icons/fi";

import { useFormik } from "formik";
import { checkoutSchema } from "./Schemas";

const onSubmit = async (values, actions) => {
	console.log(values);
	console.log(actions);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

function CheckoutForm() {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormik({
		initialValues: {
			name: "",
			streetAddress: "",
			city: "",
			postalCode: "",
			country: "",
		},
		validationSchema: checkoutSchema,
		onSubmit,
	});

	console.log(errors);

	return (
		<Form
			className={`${formStyles.form} ${formStyles.checkoutForm}`}
			onSubmit={handleSubmit}
		>
			<Container className={formStyles.shoppingCart}>
				<FiShoppingCart />
				<h5>You have 4 items in your cart</h5>
				<h5>
					To add or remove items from your cart view cart, or continue shopping.
				</h5>
			</Container>
			<Heading title="Shipping information" size="3" />
			<Form.Group className="mb-3" controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.name && touched.name
							? `${formStyles.formControlError}`
							: !errors.name && touched.name
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="name"
					type="text"
					placeholder="First &amp; last name"
				/>
				{errors.name && touched.name && (
					<p className={formStyles.error}>{errors.name}</p>
				)}
			</Form.Group>
			<Form.Group className="mb-3" controlId="streetAddress">
				<Form.Label>Street address</Form.Label>
				<Form.Control
					value={values.streetAddress}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.streetAddress && touched.streetAddress
							? `${formStyles.formControlError}`
							: !errors.streetAddress && !touched.streetAddress
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="streetAddress"
					type="text"
					placeholder="Street address"
				/>
				{errors.streetAddress && !touched.streetAddresse && (
					<p className={formStyles.error}>{errors.streetAddress}</p>
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
				buttonLabel="Check out"
				disabled={
					isSubmitting ||
					!touched.email ||
					!touched.password ||
					errors.email ||
					errors.password
						? true
						: !errors.email && !errors.password
						? false
						: true
				}
			/>
		</Form>
	);
}

export default CheckoutForm;
