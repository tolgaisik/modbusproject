import React from "react";
import "../assets/divider.scss";
const Divider = (props) => {
    const style = props.visible ? "divider w-100 my-2" : "w-100 my-2";
    return <div className={style}></div>;
};
export default Divider;
