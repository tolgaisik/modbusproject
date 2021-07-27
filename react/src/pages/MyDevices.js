import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { PlusSquare } from "react-bootstrap-icons";
import AddDevice from "../components/AddDevice";
import ModbusDevice from "../components/ModbusDevice";
const modbusDevice = {
	name: "Ankara Birinci İşletme",
	ip: "123.32.12.5",
	status: true,
};
const MyDevices = () => {
	return (
		<Container>
			<Row>
				<ModbusDevice modbusDevice={modbusDevice}></ModbusDevice>
				<AddDevice></AddDevice>
			</Row>
		</Container>
	);
};

export default MyDevices;
