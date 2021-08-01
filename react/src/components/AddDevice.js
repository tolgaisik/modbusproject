import React from "react";
import PropTypes from "prop-types";
import { createNewModbusDevice } from "../api/crud";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../assets/device.scss";
import { RedAlert, SuccessAlert } from "./Notification";
const registerNames = [
	{
		registerName: "İsim",
		targetName: "name",
	},
	{
		registerName: "İP Adresi",
		targetName: "IP",
	},
	{
		registerName: "Frekans",
		targetName: "F",
	},
	{
		registerName: "Akım A",
		targetName: "IA",
	},
	{
		registerName: "Akım B",
		targetName: "IB",
	},
	{
		registerName: "Akım C",
		targetName: "IC",
	},
	{
		registerName: "Güç",
		targetName: "P",
	},
	{
		registerName: "Güç Çarpanı (PF)",
		targetName: "PF",
	},
	{
		registerName: "Q",
		targetName: "Q",
	},
	{
		registerName: "SS",
		targetName: "SS",
	},
	{
		registerName: "Voltage AB",
		targetName: "VAB",
	},
	{
		registerName: "Voltage AC",
		targetName: "VAC",
	},
	{
		registerName: "Voltage AN",
		targetName: "VAN",
	},
	{
		registerName: "Voltage BC",
		targetName: "VBC",
	},
	{
		registerName: "Voltage BN",
		targetName: "VBN",
	},
	{
		registerName: "Voltage CN",
		targetName: "VCN",
	},
	{
		registerName: "WPNEG",
		targetName: "WPNEG",
	},
	{
		registerName: "WPPOS",
		targetName: "WPPOS",
	},
	{
		registerName: "WQPOS",
		targetName: "WQPOS",
	},
	{
		registerName: "WQNEG",
		targetName: "WQNEG",
	},
];
export default class AddDevice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showRed: false,
			showSuccess: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		createNewModbusDevice(this.state)
			.then(() => {
				mutate("/api/device");
				this.setState({ showSuccess: true });
			})
			.catch(() => {
				this.setState({ showRed: true });
			});
	}
	render() {
		return (
			<Accordion className="add-device my-1">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Yeni Cihaz Ekle </Accordion.Header>
					<Accordion.Body>
						<Form onSubmit={this.handleSubmit}>
							{registerNames.map((register, index) => {
								return (
									<Register
										key={index}
										registerName={register.registerName}
										targetName={register.targetName}
										handleChange={this.handleChange}
									/>
								);
							})}
							<Button type="submit" className="custom-btn">
								Kaydet
							</Button>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<RedAlert
					show={this.state.showRed}
					headText="Başarılı!"
					bodyText={
						this.state.name &&
						this.state.name.concat(" cihazı başarıyla eklendi.")
					}
				></RedAlert>
				<SuccessAlert
					show={this.state.showSuccess}
					headText="Hata !"
					bodyText="Cihaz Eklenemedi."
				></SuccessAlert>
			</Accordion>
		);
	}
}

class Register extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Form.Group
				as={Row}
				className="mb-3"
				controlId="formPlaintextPassword"
			>
				<Form.Label column>{this.props.registerName}</Form.Label>
				<Col sm="6">
					<Form.Control
						name={this.props.targetName}
						onChange={this.props.handleChange}
						placeholder={this.props.targetName}
						type="text"
					/>
				</Col>
				<Col>
					<Button variant="outline-danger">Test</Button>
				</Col>
			</Form.Group>
		);
	}
}
Register.propTypes = {
	registerName: PropTypes.string.isRequired,
	targetName: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};
