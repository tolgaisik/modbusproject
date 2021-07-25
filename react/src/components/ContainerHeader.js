import React from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/containerheader.scss";
function ContainerHeader(props) {
    return (
        <div className="container-header px-5">
            <p>{props.text}</p>
        </div>
    );
}

export default ContainerHeader;
