import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TitleBar = (props) => {
	return (
		<Row>
			<Col>
				<span>{props.title}</span>
			</Col>
		</Row>
	);
};

export default TitleBar;
