import React from "react";
import "../assets/containerfooter.scss";
function ContainerFooter(props) {
    return (
        <div className="container-footer">
            <p>{props.text}</p>
        </div>
    );
}
