import React from "react";
import useSWR from "swr";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { CurrencyDollar } from "react-bootstrap-icons";
import "../assets/scss/cashbox.scss";
const CashBox = ({ deviceId }) => {
	const { data, error, isValidating } = useSWR("/api/power_day", {
		refreshInterval: 15000,
	});
	if (isValidating) <Spinner animation="border" role="status"></Spinner>;
	return (
		<Card className="p-3 bg-container cash-box">
			<Row>
				<Col xl={8} lg={8} md={8} sm={8} xs={8}>
					<Row className="value-x">
						<Col lg={12}>
							<span className="box-text">GÜNLÜK KAZANÇ</span>
						</Col>
						<Col>
							<span className="value" lg={12}>
								{data ? data.production + "$" : "0"}&nbsp;&nbsp;
							</span>
						</Col>
					</Row>
				</Col>
				<Col
					xl={4}
					lg={4}
					md={4}
					sm={4}
					xs={4}
					className="d-flex justify-content-center align-items-center"
				>
					<CurrencyDollar className="dollar float-right" />
				</Col>
			</Row>
		</Card>
	);
};

export default CashBox;
