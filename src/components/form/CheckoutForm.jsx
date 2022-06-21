import React from "react";
import Heading from "../heading/Heading";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
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
		isValid,
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
			radioCardGroup: "",
			cardHolder: "",
			cardNumber: "",
			expiryMonth: "",
			expiryYear: "",
			ccvNumber: "",
			termsCheck: false,
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
							: !errors.streetAddress && touched.streetAddress
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="streetAddress"
					type="text"
					placeholder="Street name &amp; number"
				/>
				{errors.streetAddress && touched.streetAddress && (
					<p className={formStyles.error}>{errors.streetAddress}</p>
				)}
			</Form.Group>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="city">
					<Form.Label>City</Form.Label>
					<Form.Control
						value={values.city}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.city && touched.city
								? `${formStyles.formControlError}`
								: !errors.city && touched.city
								? `${formStyles.formControlSuccess}`
								: ""
						}
						name="city"
						type="text"
						placeholder="City"
					/>
					{errors.city && touched.city && (
						<p className={formStyles.error}>{errors.city}</p>
					)}
				</Form.Group>
				<Form.Group as={Col} controlId="postalCode">
					<Form.Label>Postal code</Form.Label>
					<Form.Control
						value={values.postalCode}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.postalCode && touched.postalCode
								? `${formStyles.formControlError}`
								: !errors.postalCode && touched.postalCode
								? `${formStyles.formControlSuccess}`
								: ""
						}
						name="postalCode"
						type="number"
						placeholder="Ex 2055"
					/>
					{errors.postalCode && touched.postalCode && (
						<p className={formStyles.error}>{errors.postalCode}</p>
					)}
				</Form.Group>
			</Row>
			<Form.Group className="mb-3" controlId="country">
				<Form.Label>Country</Form.Label>
				<Form.Control
					value={values.country}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						errors.country && touched.country
							? `${formStyles.formControlError}`
							: !errors.country && touched.country
							? `${formStyles.formControlSuccess}`
							: ""
					}
					name="country"
					type="text"
					placeholder="Country"
				/>
				{errors.country && touched.country && (
					<p className={formStyles.error}>{errors.country}</p>
				)}
			</Form.Group>
			<Container className="mb-3 mt-4">
				<Heading title="Credit card details" size="3" />

				<Form.Group className="m-3" controlId="radioCardGroup">
					<Container
						value={values.radioCardGroup}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.radioCardGroup && touched.radioCardGroup
								? `${formStyles.formControlError}`
								: !errors.radioCardGroup && touched.radioCardGroup
								? `${formStyles.formControlSuccess}`
								: ""
						}
					>
						<Row className="mb-2">
							<Col sm={{ span: 4 }}>
								<Form.Check
									name="radioCardGroup"
									type="radio"
									label="Visa"
									id="visaCardRadio"
								/>
							</Col>
							<Col sm={{ span: 4 }}>
								<Form.Check
									name="radioCardGroup"
									type="radio"
									label="MasterCard"
									id="masterCardRadio"
								/>
							</Col>
						</Row>
					</Container>
					{errors.radioCardGroup && touched.radioCardGroup && (
						<p className={formStyles.error}>{errors.radioCardGroup}</p>
					)}
				</Form.Group>

				<Form.Group className="mb-3" controlId="cardHolder">
					<Form.Label>Card holder</Form.Label>
					<Form.Control
						value={values.cardHolder}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.cardHolder && touched.cardHolder
								? `${formStyles.formControlError}`
								: !errors.cardHolder && touched.cardHolder
								? `${formStyles.formControlSuccess}`
								: ""
						}
						name="cardHolder"
						type="text"
						placeholder="Name on card"
					/>
					{errors.cardHolder && touched.cardHolder && (
						<p className={formStyles.error}>{errors.cardHolder}</p>
					)}
				</Form.Group>
				<Form.Group className="mb-3" controlId="cardNumber">
					<Form.Label>Card number</Form.Label>
					<Form.Control
						value={values.cardNumber}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.cardNumber && touched.cardNumber
								? `${formStyles.formControlError}`
								: !errors.cardNumber && touched.cardNumber
								? `${formStyles.formControlSuccess}`
								: ""
						}
						name="cardNumber"
						type="text"
						placeholder="**** **** **** ****"
					/>
					{errors.cardNumber && touched.cardNumber && (
						<p className={formStyles.error}>{errors.cardNumber}</p>
					)}
				</Form.Group>
				<Row className="mb-3">
					<Form.Group
						as={Col}
						className="col-md-3 col-sm-3 col-xs-3"
						controlId="expiryMonth"
					>
						<Form.Label>Expiry month</Form.Label>
						<Form.Control
							value={values.expiryMonth}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.expiryMonth && touched.expiryMonth
									? `${formStyles.formControlError}`
									: !errors.expiryMonth && touched.expiryMonth
									? `${formStyles.formControlSuccess}`
									: ""
							}
							name="expiryMonth"
							type="number"
							placeholder="mm"
						/>
						{errors.expiryMonth && touched.expiryMonth && (
							<p className={formStyles.error}>{errors.expiryMonth}</p>
						)}
					</Form.Group>
					<Form.Group
						as={Col}
						className="col-md-3 col-sm-3 col-xs-3"
						controlId="expiryYear"
					>
						<Form.Label>Expiry year</Form.Label>
						<Form.Control
							value={values.expiryYear}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.expiryYear && touched.expiryYear
									? `${formStyles.formControlError}`
									: !errors.expiryYear && touched.expiryYear
									? `${formStyles.formControlSuccess}`
									: ""
							}
							name="expiryYear"
							type="number"
							placeholder="yy"
						/>
						{errors.expiryYear && touched.expiryYear && (
							<p className={formStyles.error}>{errors.expiryYear}</p>
						)}
					</Form.Group>
					<Form.Group
						as={Col}
						className="col-md-4 col-sm-4 col-xs-4"
						controlId="ccvNumber"
					>
						<Form.Label>CCV</Form.Label>
						<Form.Control
							value={values.ccvNumber}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.ccvNumber && touched.ccvNumber
									? `${formStyles.formControlError}`
									: !errors.ccvNumber && touched.ccvNumber
									? `${formStyles.formControlSuccess}`
									: ""
							}
							name="ccvNumber"
							type="number"
							placeholder="***"
						/>
						{errors.ccvNumber && touched.ccvNumber && (
							<p className={formStyles.error}>{errors.ccvNumber}</p>
						)}
					</Form.Group>
				</Row>
				<Form.Group as={Row} className="mb-3" controlId="termsCheck">
					<Col sm={{ span: 12 }}>
						<Form.Check
							value={values.termsCheck}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.termsCheck && touched.termsCheck
									? `${formStyles.formControlError}`
									: !errors.termsCheck && touched.termsCheck
									? `${formStyles.formControlSuccess}`
									: ""
							}
							name="termsCheck"
							type="checkbox"
							label="Accept terms &amp; conditions"
						/>
						{errors.termsCheck && touched.termsCheck && (
							<p className={formStyles.error}>{errors.termsCheck}</p>
						)}
					</Col>
				</Form.Group>
			</Container>
			<BtnPrimary
				buttonLabel="Check out"
				disabled={
					isSubmitting ||
					!isValid ||
					(Object.keys(touched).length === 0 && touched.constructor === Object)
				}
			/>
		</Form>
	);
}

export default CheckoutForm;
