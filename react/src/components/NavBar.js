import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { PersonCheck } from "react-bootstrap-icons";
import "../assets/navbar.scss";

function NavBar() {
	return (
		<Navbar className="px-5" bg="light" expand="lg">
			<Navbar.Brand className="nav-brand px-1" href="/">
				AntLabsEnergy
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto my-2 my-lg-0" navbarScroll>
					<Nav.Link href="/dashboard">Dashboard</Nav.Link>
					<Nav.Link href="/device">Device</Nav.Link>
					<Nav.Link href="/docs">Documents</Nav.Link>
					<Nav.Link href="/settings">Settings</Nav.Link>
					<Nav.Link href="/settings">
						<PersonCheck
							className="float-right"
							style={{ fontSize: 24 }}
						></PersonCheck>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
export default NavBar;
