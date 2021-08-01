import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AddDevice from "../components/AddDevice";
import ModbusDevice from "../components/ModbusDevice";
import TitleBar from "../components/TitleBar";
import useSWR from "swr";
const myDevices = [
	{
		name: "Ankara 84",
		status: true,
		ip: "123.232.1.2",
		F: 5001,
		IA: 50,
		IB: 49,
		IC: 49,
		P: 2,
		PF: 9857,
		Q: 0,
		SS: 0,
		VAB: 406,
		VAC: 408,
		VAN: 236,
		VBC: 406,
		VBN: 234,
		VCN: 235,
		WPNEG: 27,
		WPPOS: 271,
		WQNEG: 896,
		WQPOS: 2951,
		generated_at: "12.12.1232",
		id: 1,
	},
	{
		name: "Ankara 84",
		status: true,
		ip: "123.232.1.2",
		F: 5001,
		IA: 50,
		IB: 49,
		IC: 49,
		P: 2,
		PF: 9857,
		Q: 0,
		SS: 0,
		VAB: 406,
		VAC: 408,
		VAN: 236,
		VBC: 406,
		VBN: 234,
		VCN: 235,
		WPNEG: 27,
		WPPOS: 271,
		WQNEG: 896,
		WQPOS: 2951,
		generated_at: "12.12.1232",
		id: 1,
	},
];
const MyDevices = () => {
	const { data, error, isValidating } = useSWR("/api/device");

	return (
		<Container>
			<Row className="mt-3">
				<TitleBar title="Cihazlarım"></TitleBar>
				{data &&
					data.map((item, index) => {
						return <ModbusDevice key={index} modbusDevice={item} />;
					})}
				<TitleBar title="Yeni Cihaz Ekleme"></TitleBar>

				<AddDevice></AddDevice>
			</Row>
		</Container>
	);
};

export default MyDevices;
