import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
import { Button, Row, Col, ButtonGroup, Spinner } from "react-bootstrap";
import "../assets/voltagegraph.scss";
import ContainerHeader from "./ContainerHeader";
const headerText = "Voltage grafiği günlük voltage değerlerini göstermektedir.";

export default function VoltageGraph({ width_, deviceId }) {
	const [interval, setInterval] = useState([]);
	const { data, error, isValidating } = useSWR("/api/voltage_day", {
		refreshInterval: 15000,
	});
	return (
		<div className="voltage">
			{data === undefined ? (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			) : (
				<Row>
					<Col sm={12} lg={12} md={12}>
						<ContainerHeader text={headerText} />
					</Col>
					<Col sm={12} lg={12} md={12}>
						<ButtonGroup className="mx-auto">
							<Button
								className="mb-4 ml-5"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval([])}
							>
								gün
							</Button>
							<Button
								className="mb-4"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval([])}
							>
								hafta
							</Button>
							<Button
								className="mb-4"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval([])}
							>
								ay
							</Button>
						</ButtonGroup>
					</Col>
					<Col sm={12} lg={12} md={12} className="center">
						<LineChart
							width={width_ * 0.9}
							height={width_ * 0.35}
							data={data}
						>
							<XAxis dataKey="generated_at" />
							<Tooltip />
							<Legend />
							<Line dataKey="VAB" fill="#145DA8" />
							<Line dataKey="VAC" fill="#1c00bd" />
							<Line dataKey="VAN" fill="#1e5aff" />
							<Line dataKey="VBC" fill="#dc3545" />
							<Line dataKey="VBN" fill="#6ad3f3" />
							<Line dataKey="VCN" fill="#a9f1df" />
						</LineChart>
					</Col>
				</Row>
			)}{" "}
		</div>
	);
}
