import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Clock } from "react-bootstrap-icons";
import "../assets/walletbox.scss";
const WalletBox = (props) => {
    return (
        <Card className="p-3 bg-container wallet-box">
            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Row className="value-x">
                        <Col lg={12}>
                            <span>MAX AKIM</span>
                        </Col>
                        <Col>
                            <span className="value" lg={12}>
                                {props.value}
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
                    <Clock className="dollar float-right" />
                </Col>
            </Row>
        </Card>
    );
};

export default WalletBox;
