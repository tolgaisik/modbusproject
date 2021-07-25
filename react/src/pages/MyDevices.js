import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { PlusSquare } from "react-bootstrap-icons";
import Device from "../components/Device";
const MyDevices = () => {
	return (
		<Container>
			<Row>
				<Device></Device>
				<Col xl={12} lg={12} md={12} sm={12} className="center">
					<PlusSquare className="plus" />
				</Col>
			</Row>
		</Container>
	);
};

export default MyDevices;
