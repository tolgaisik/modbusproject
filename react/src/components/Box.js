import React from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import "../assets/box.scss";
export default function Box({ children, deviceId, apiUrl, titleText }) {
	const preparedURL = "/api/".concat(apiUrl);
	const { data, error, isValidating } = useSWR(preparedURL, {
		refreshInterval: 15000,
	});

	return data ? (
		<Card className="p-3 bg-container cash-box">
			<Row>
				<Col xl={8} lg={8} md={8} sm={8} xs={8}>
					<Row className="value-x">
						<Col lg={12}>
							<span className="box-text">{titleText}</span>
						</Col>
						<Col>
							<span className="value" lg={12}>
								{(data.production || "0") + "$"}&nbsp;&nbsp;
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
					className="d-flex justify-content-center align-items-center box-icon"
				>
					{children}
				</Col>
			</Row>
		</Card>
	) : (
		<Spinner animation="border" role="status"></Spinner>
	);
}

Box.propTypes = {
	children: PropTypes.element.isRequired,
	deviceId: PropTypes.number.isRequired,
	apiUrl: PropTypes.string.isRequired,
	titleText: PropTypes.string.isRequired,
};
