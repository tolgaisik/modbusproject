import React, { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import { Button, ButtonGroup, Row, Col, Spinner } from "react-bootstrap";
import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} from "recharts";
import "../assets/currentgraph.scss";
import ContainerHeader from "./ContainerHeader";
const headerText = "Akım grafiği ortalama saatlik değerleri göstermektedir.";

export default function CurrentGraph({ width_, deviceId }) {
	const { data, error, isValidating } = useSWR("/api/current_day", {
		refreshInterval: 15000,
	});
	const [interval, setInterval] = useState([]);
	return (
		<div className="current">
			{data === undefined ? (
				<Spinner animation="border" role="status"></Spinner>
			) : (
				<Row>
					<Col sm={12} lg={12} md={12}>
						<ContainerHeader text={headerText} />
					</Col>
					<Col>
						<ButtonGroup className="mx-auto">
							<Button
								className="mb-4 ml-5"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval()}
							>
								gün
							</Button>
							<Button
								className="mb-4"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval()}
							>
								hafta
							</Button>
							<Button
								className="mb-4"
								size="sm"
								variant="outline-danger"
								onClick={() => setInterval()}
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
							<Line
								type="monotone"
								dataKey="IA"
								stroke="#145DA8"
								activeDot={{ r: 0 }}
							/>
							<Line
								type="monotone"
								dataKey="IB"
								stroke="#dc3545"
								activeDot={{ r: 0 }}
							/>
							<Line
								type="monotone"
								dataKey="IC"
								stroke="#145DA8"
								activeDot={{ r: 0 }}
							/>
						</LineChart>
					</Col>
				</Row>
			)}
		</div>
	);
}
