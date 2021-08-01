import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import PropTypes from "prop-types";
export function RedAlert({ show, headerText, bodyText }) {
	const [shouldShow, setShow] = useState(show);
	return (
		<ToastContainer position="top-end" className="p-3">
			<Toast
				show={shouldShow}
				delay={3000}
				autohide
				onClose={() => setShow(false)}
			>
				<Toast.Header>
					<strong className="me-auto">{headerText}</strong>
				</Toast.Header>
				<Toast.Body>{bodyText}</Toast.Body>
			</Toast>
		</ToastContainer>
	);
}
export function SuccessAlert({ show }) {
	return (
		<div>
			<Toast
				show={show}
				delay={3000}
				autohide
				onClose={() => setShow(false)}
			>
				<Toast.Header>
					<strong className="me-auto">Success</strong>
					<small className="text-muted">just now</small>
				</Toast.Header>
				<Toast.Body>See? Just like this.</Toast.Body>
			</Toast>
		</div>
	);
}
RedAlert.propTypes = {
	show: PropTypes.bool.isRequired,
};
SuccessAlert.propTypes = {
	show: PropTypes.bool.isRequired,
};
