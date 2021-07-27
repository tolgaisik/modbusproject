import React from "react";
import {
	InputGroup,
	FormControl,
	Card,
	Button,
	Accordion,
} from "react-bootstrap";
import "../assets/device.scss";
import { PlusSquare } from "react-bootstrap-icons";

export default function AddDevice({ deviceId }) {
	return (
		<div className="add-device my-4">
			<Accordion defaultActiveKey="1">
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="0"
							className="accordion-btn"
						>
							Yeni Cihaz Ekle
							<PlusSquare className="plus" />
						</Accordion.Toggle>
					</Card.Header>

					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Register></Register>
							<Register></Register>
							<Register></Register>
							<Register></Register>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

function Register({ registerId }) {
	return (
		<div>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="register adres"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<Button variant="outline-primary" id="button-addon2">
					Test
				</Button>
				<RegisterValue></RegisterValue>
			</InputGroup>
		</div>
	);
}

function RegisterValue() {
	return <div></div>;
}
