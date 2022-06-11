import React from "react";
import Heading from ".././components/heading/Heading";
import CheckoutForm from "../components/form/CheckoutForm";
import Container from "react-bootstrap/Container";

function Checkout() {
	return (
		<Container className="whiteBgContainer">
			<Heading title="Check out" />
			<CheckoutForm />
		</Container>
	);
}

export default Checkout;
