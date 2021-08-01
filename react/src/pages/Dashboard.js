import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./scss/home.scss";
import StatusBar from "../components/StatusBar";
import ValueTable from "../components/ValueTable";
import BoxSection from "../sections/BoxSection";
import CurrentGraph from "../components/CurrentGraph";
import VoltageGraph from "../components/VoltageGraph";
import EarningGraph from "../components/EarningGraph";
import Divider from "../components/Divider";
var data = {
	device: "127.22.2.1",
	status: "Running",
	title: "Here is whats happening!",
	money: 22,
	val2: "96.2%",
	val3: 13223,
	time: "10:23 Wed",
	money2: 1023,
};
function Dashboard() {
	const [deviceId, setDeviceID] = useState();
	const earning_container = useRef(null);
	const current_container = useRef(null);
	const voltage_container = useRef(null);
	const [earning_container_width, setEarningContainerWidth] = useState(0);
	const [current_container_width, setCurrentContainerWidth] = useState(0);
	const [voltage_container_width, setVoltageContainerWidth] = useState(0);
	useEffect(() => {
		earning_container.current.offsetWidth &&
			setEarningContainerWidth(earning_container.current.offsetWidth);
		current_container.current.offsetWidth &&
			setCurrentContainerWidth(current_container.current.offsetWidth);
		voltage_container.current.offsetWidth &&
			setVoltageContainerWidth(voltage_container.current.offsetWidth);
		window.addEventListener("resize", () => {
			setEarningContainerWidth(earning_container.current.offsetWidth);
			setCurrentContainerWidth(current_container.current.offsetWidth);
			setVoltageContainerWidth(voltage_container.current.offsetWidth);
		});
	}, []);
	return (
		<div className="home">
			<Row>
				<Col xl={8} lg={8} md={12} sm={12} xs={12}>
					<Row>
						<Col xl={12} lg={12} md={12} sm={12} xs={12}>
							<StatusBar
								device={data.device}
								status={data.status}
							/>
						</Col>
						<Col xl={12} lg={12} md={12} sm={12} xs={12}>
							{" "}
							<BoxSection />
						</Col>
						<Col xl={12} lg={12} md={12} sm={12} xs={12}>
							<div
								ref={earning_container}
								className="bg-container container-border center py-4"
							>
								<EarningGraph width={earning_container_width} />
							</div>
						</Col>
						<Divider />
						<Col xl={12} lg={12} md={12} sm={12} xs={12}>
							<ValueTable></ValueTable>
						</Col>
						<Divider />
					</Row>
				</Col>
				<Col xl={4} lg={4} md={12} sm={12} xs={12} className="py-3">
					<Row>
						<Col>
							<div
								ref={voltage_container}
								className="container-border bg-container center py-4"
							>
								<VoltageGraph width={voltage_container_width} />
							</div>
						</Col>
						<Divider />
						<Col>
							<div
								ref={current_container}
								className="container-border bg-container center py-4"
							>
								<CurrentGraph width={current_container_width} />
							</div>
						</Col>
						<Divider />
						<Col>
							<div
								ref={voltage_container}
								className="container-border bg-container center py-4"
							>
								<VoltageGraph width={voltage_container_width} />
							</div>
						</Col>
						<Divider />
						<Col>
							<div
								ref={current_container}
								className="container-border bg-container center py-4"
							>
								<CurrentGraph width={current_container_width} />
							</div>
						</Col>
						<Divider />
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Dashboard;
