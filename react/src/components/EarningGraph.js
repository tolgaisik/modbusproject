import React, { useState } from "react";
import useSWR from "swr";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ContainerHeader from "./ContainerHeader";
import "../assets/earninggraph.scss";
const headerText =
	"Toplam güç grafiği günlük haftalık ve aylık enerji üretimi göstermektedir.";
export default function EarningGraph({ width_, deviceId }) {
	const [interval, setInterval] = useState([]);
	const { data, error, isValidating } = useSWR("/api/power_day", {
		refreshInterval: 15000,
	});
	for (let i = 0; data && i < data.length; i++) {
		data[i]["production"] = Math.abs(data[i]["production"]);
	}
	return (
		<div className="earning">
			{data === undefined ? (
				<Spinner animation="border" role="status"></Spinner>
			) : (
				<Row>
					<Col sm={12} lg={12} md={12}>
						<ContainerHeader text={headerText} />
					</Col>
					<Col sm={12} lg={12} md={12} className="center">
						<BarChart
							width={width_ * 0.9}
							height={width_ * 0.35}
							data={data}
						>
							<XAxis dataKey="generated_at" />
							<Tooltip />
							<Legend />
							<Bar dataKey="production" fill="#145DA8" />
						</BarChart>
					</Col>
				</Row>
			)}
		</div>
	);
}
