import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const postalCodeRules = /^([D-d][K-k])?( |-)?[0-9]{0}[0-9]{4}$/;

const creditCardNumberRules =
	/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

const monthExpiryRules = /^(0?[1-9]|1[012])$/;

const yearExpiryRules = /^([0-9]{4}|[0-9]{2})$/;

const ccvNumberRules = /^[0-9]{3,4}$/;

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email address is required"),
	password: yup
		.string()
		.min(8)
		.matches(passwordRules, {
			message:
				"Invalid password, please double check your password and try again",
		})
		.required("Password is required"),
});

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email address is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 8 characters")
		.matches(passwordRules, { message: "Please create a stronger password" })
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.when("password", {
			is: (val) => (val && val.length > 0 ? true : false),
			then: yup
				.string()
				.oneOf([yup.ref("password")], null, "Passwords must match"),
		})
		.required("Confirming password is required"),
});

export const checkoutSchema = yup.object().shape({
	name: yup
		.string()
		.min(5, "Please enter your full name")
		.required("Name is required"),
	streetAddress: yup
		.string()
		.min(5, "Please enter your street address")
		.max(50, "Street address name is too long")
		.required("Street address is required"),
	city: yup
		.string()
		.min(3, "Please enter your city")
		.required("City name is required"),
	postalCode: yup
		.string()
		.matches(postalCodeRules, {
			message: "Valid postal code should be 4 digits",
		})
		.required("Postal code is required"),
	country: yup
		.string()
		.min(4, "Please enter a valid country")
		.max(30, "Please enter a valid country")
		.required("Country name is required"),
	radioCardGroup: yup
		.string()
		.required("Choosing type of credit card is required"),
	cardHolder: yup
		.string()
		.min(10, "Please enter the full card holder name")
		.required("Card holder name is required"),
	cardNumber: yup
		.string()
		.trim()
		.min(16, "Card number should be 16 digits, no spaces")
		.max(16, "Card number should be 16 digits, no spaces")
		.matches(creditCardNumberRules, "not empty", {
			message: "Please enter a valid credit card number",
		})
		.required("Credit card number is required"),
	expiryMonth: yup
		.string()
		.matches(monthExpiryRules, {
			message: "Please enter a valid month number between 1 and 12",
		})
		.required("Expiration month is required"),
	expiryYear: yup
		.string()
		.matches(yearExpiryRules, {
			message: "Please enter a valid expiration year",
		})
		.required("Expiration year is required"),
	ccvNumber: yup
		.string()
		.matches(ccvNumberRules, {
			message: "Please enter a valid CCV code - 3 digits",
		})
		.required("Expiration year is required"),
	termsCheck: yup
		.boolean()
		.oneOf([true], "Please accept the terms of service")
		.required("Accepting terms &amp; conditions is required"),
});
