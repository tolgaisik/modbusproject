import React from "react";
import "../assets/sectionheader.scss";
const SectionHeader = (props) => {
    return (
        <div className="section-header py-3 center">
            <span>{props.title}</span>
        </div>
    );
};
export default SectionHeader;
