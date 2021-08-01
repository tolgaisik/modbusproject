import React, { useState } from "react";
import useSWR from "swr";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
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
			{data ? (
				<Row>
					<Col sm={12} lg={12} md={12}>
						<ContainerHeader text={headerText} />
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
			) : (
				<Spinner animation="border" role="status"></Spinner>
			)}
		</div>
	);
}
