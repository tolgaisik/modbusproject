import React from "react";
import StatusIcon from "./StatusIcon";
import { Card, Accordion, Button } from "react-bootstrap";
export default function ModbusDevice({ modbusDevice }) {
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
							{modbusDevice.name}&nbsp;&nbsp;{modbusDevice.ip}
							&nbsp;&nbsp;&nbsp;
							<StatusIcon
								status={modbusDevice.status}
							></StatusIcon>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<DeviceBody></DeviceBody>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

function DeviceBody() {
	return <div>Hello world</div>;
}
