import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Box from "../components/Box";
import { CurrencyDollar, Clock } from "react-bootstrap-icons";
function BoxSection() {
	return (
		<Row>
			<Col xl={4} lg={4} md={4} sm={4}>
				<Box deviceId={1} apiUrl="power_day" titleText="GÜNLÜK KAZANÇ">
					<CurrencyDollar />
				</Box>
			</Col>
			<Col xl={4} lg={4} md={4} sm={4}>
				<Box deviceId={1} apiUrl="power_day" titleText="GÜNLÜK KAZANÇ">
					<CurrencyDollar />
				</Box>
			</Col>
			<Col xl={4} lg={4} md={4} sm={4}>
				<Box deviceId={1} apiUrl="voltage_day" titleText="MAX AKIM">
					<Clock></Clock>
				</Box>
			</Col>
		</Row>
	);
}
export default BoxSection;
