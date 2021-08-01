import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../assets/modbusdevice.scss";

function prepareList(device) {
	const retval = [];
	const deviceList = Object.keys(device);
	for (let i = 0; i < deviceList.length; ++i) {
		retval.push(deviceList[i]);
	}
	return retval;
}

export default function ModbusDevice({ modbusDevice }) {
	const preparedList = prepareList(modbusDevice);
	return (
		<Accordion className="add-device my-2">
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					{modbusDevice.name}&nbsp;&nbsp;{modbusDevice.ip}
					&nbsp;&nbsp;&nbsp;
				</Accordion.Header>
				<Accordion.Body>
					<Row>
						{preparedList.map((item, index) => {
							return (
								<Col key={index} lg={6} md={6}>
									<span>
										{item} register adresi :
										&nbsp;&nbsp;&nbsp;
										{modbusDevice[item]}
									</span>
								</Col>
							);
						})}
					</Row>
					<Buttons />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
function Buttons() {
	return (
		<ButtonGroup className="mt-3">
			<Button className="custom-btn" variant="outline-danger">
				Düzenle
			</Button>
			<Button variant="outline-primary" className="custom-btn">
				Sil
			</Button>
		</ButtonGroup>
	);
}
