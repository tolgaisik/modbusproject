import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BatteryCharging } from "react-bootstrap-icons";
import "../assets/infobox.scss";
const InfoBox = (props) => {
    return (
        <Card className="p-3 bg-container info-box">
            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Row className="value-x">
                        <Col lg={12}>
                            <span>TOPLAM KAZANÇ</span>
                        </Col>
                        <Col>
                            <span className="value" lg={12}>
                                {props.value}{" "}
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
                    <BatteryCharging className="dollar float-right" />
                </Col>
            </Row>
        </Card>
    );
};

export default InfoBox;
