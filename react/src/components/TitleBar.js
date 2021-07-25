import React from "react";
import { Row, Col } from "react-bootstrap";
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
