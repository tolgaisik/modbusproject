import React from "react";
import useSWR from "swr";
import { Row, Col, Spinner } from "react-bootstrap";
import ValueBox from "../components/ValueBox";
import CashBox from "../components/CashBox";
import WalletBox from "../components/WalletBox";
function BoxSection() {
    return (
        <Row>
            <Col xl={4} lg={4} md={4} sm={4}>
                <ValueBox />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4}>
                <CashBox />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4}>
                <WalletBox />
            </Col>
        </Row>
    );
}
export default BoxSection;
