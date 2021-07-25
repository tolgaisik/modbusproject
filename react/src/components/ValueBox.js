import React from "react";
import { useSWR } from "swr";
import { Card, Row, Col } from "react-bootstrap";
import { Wallet2 } from "react-bootstrap-icons";
import "../assets/valuebox.scss";
const ValueBox = (props) => {
    return (
        <Card className="p-3 bg-container value-box">
            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Row className="value-x">
                        <Col lg={12}>
                            <span>ÜRETİM KW/H</span>
                        </Col>
                        <Col>
                            <span className="value" lg={12}>
                                {props.value}{" "}
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className="center">
                    <Wallet2 className="dollar float-right" />
                </Col>
            </Row>
        </Card>
    );
};

export default ValueBox;
