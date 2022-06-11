import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import navStyles from "./Navigation.module.scss";
import Heading from ".././heading/Heading";

function Navigation() {
	return (
		<>
			{[false].map((expand) => (
				<Navbar
					key={expand}
					navbar="light"
					bg="light"
					expand="false"
					className={navStyles.navbar}
				>
					<Container fluid>
						<Navbar.Brand href="#">
							{" "}
							<img
								src="../../../images/bitsbotslogo-white.svg"
								width="200"
								height="210"
								className="d-inline-block align-top"
								alt="Bitsbots logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle
							className={navStyles.navbarTogglerIcon}
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									className={navStyles.h5}
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									Menu
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link href="#action1" className={navStyles.h4}>
										<Heading title="Game Store" size="4" />
									</Nav.Link>
									<Nav.Link href="#action2" className={navStyles.h4}>
										<Heading title="Shopping Cart" size="4" />
									</Nav.Link>
									<Nav.Link href="#action2" className={navStyles.h4}>
										<Heading title="Checkout" size="4" />
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default Navigation;
