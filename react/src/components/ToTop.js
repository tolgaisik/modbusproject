import React from "react";
import { ArrowUpSquareFill } from "react-bootstrap-icons";
function ToTop() {
    function moveToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className="to-top side-item" onClick={moveToTop}>
            <span className="top-icon" style={{ fontSize: 22 }}>
                <ArrowUpSquareFill></ArrowUpSquareFill>
            </span>
            <span>Yukarı</span>
        </div>
    );
}

export default ToTop;
