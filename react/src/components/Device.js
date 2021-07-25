import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
const registerList = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8];
export default function Device({ deviceId }) {
	const myRegisterList = registerList.map(function (index, item) {
		return <Register></Register>;
	});
	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Accordion.Toggle as={Button} eventKey="0">
					Yeni Cihaz Ekle
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<div>{myRegisterList}</div>
				</Accordion.Collapse>
			</Accordion>
		</div>
	);
}

function Register() {
	return (
		<div>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Register numarası"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<Button variant="outline-secondary" id="button-addon2">
					Test
				</Button>
				<RegisterValue />
			</InputGroup>
		</div>
	);
}

function RegisterValue() {
	return (
		<div className="border d-flex align-items-center">
			<h4 className="d-flex align-items-center">21</h4>
		</div>
	);
}
