import React from "react";
import { CheckLg, ExclamationDiamond } from "react-bootstrap-icons";
import "../assets/statusicon.scss";
export default function StatusIcon({ status }) {
	return status === true ? <Green /> : <Red />;
}

export function Red() {
	return <ExclamationDiamond className="red"></ExclamationDiamond>;
}

export function Green() {
	return <CheckLg className="green"></CheckLg>;
}
