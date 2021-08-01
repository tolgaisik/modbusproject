import React from "react";
import "../assets/containerheader.scss";
function ContainerHeader(props) {
	return (
		<div className="container-header px-5">
			<p>{props.text}</p>
		</div>
	);
}

export default ContainerHeader;
