import React from "react";
import useSWR, { SWRConfig } from "swr";
import { Table, Row, Col, Spinner } from "react-bootstrap";
import { ArrowRepeat } from "react-bootstrap-icons";
import "../assets/valuetable.scss";
const ValueTable = ({ deviceId }) => {
	const { data, error, isValidating } = useSWR("/api", {
		refreshInterval: 15000,
	});
	const styles = data ? "" : " center ";
	return (
		<div
			className={
				"p-5 container-border bg-container value-table " + styles
			}
		>
			{data === undefined ? (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			) : (
				<Row>
					{" "}
					<Col>
						<table>
							<tbody>
								<tr>
									<th>Register</th>
									<th>Değer</th>
								</tr>
								{data &&
									Object.keys(data[0]).map((item, index) => {
										if (index < 11)
											return (
												<tr
													key={index}
													className="table-row mb-3"
												>
													<td>{item}</td>
													<td>{data[0][item]}</td>
												</tr>
											);
									})}
							</tbody>
						</table>
					</Col>
					<Col>
						<table>
							<tbody>
								<tr>
									<th>Register</th>
									<th>Değer</th>
								</tr>
								{data &&
									Object.keys(data[0]).map((item, index) => {
										if (index > 10)
											return (
												<tr
													key={index}
													className="table-row"
												>
													<td>{item}</td>
													<td>{data[0][item]}</td>
												</tr>
											);
									})}
							</tbody>
						</table>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default ValueTable;
