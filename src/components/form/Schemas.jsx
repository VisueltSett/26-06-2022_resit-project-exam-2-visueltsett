import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

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
		.required("Street address is required"),
	city: yup
		.string()
		.min(3, "Please enter your city")
		.required("City name is required"),
	postalCode: yup
		.number()
		.positive()
		.integer()
		.min(4, "Please enter a valid postal code")
		.max(5, "Please enter a valid postal code")
		.required("Postal code is required"),
	country: yup
		.string()
		.min(4, "Please enter a valid country")
		.max(20, "Please enter a valid country")
		.required("Country name is required"),
});
