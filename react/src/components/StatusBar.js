import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import "../assets/statusbar.scss";
const StatusBar = (props) => {
    return (
        <Row className="status-bar py-3">
            <Col xl={6} l={6} md={6} sm={6} xs={6}>
                <Row>
                    <Col xl={12} l={12} md={12} sm={12} xs={12}>
                        <span className="text">Dashboard</span>
                    </Col>
                    <Col xl={12} l={12} md={12} sm={12} xs={12}>
                        <span>Cihaz No : {props.device}</span>
                    </Col>
                </Row>
            </Col>
            <Col xl={6} l={6} md={6} sm={6} xs={6}>
                <SearchBar className="float-right" />
            </Col>
        </Row>
    );
};

export default StatusBar;
