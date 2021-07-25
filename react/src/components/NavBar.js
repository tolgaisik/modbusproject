import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Row, Col } from "react-bootstrap";
import { House, FileCheck, Gear, PersonCheck } from "react-bootstrap-icons";
import "../assets/navbar.scss";

const NavBar = () => {
	const location = useLocation();
	const cssClass = " cursor-border ";
	const defaultClass = " link ";
	return (
		<Navbar className="justify-content-center navbar-custom">
			<Link
				to="/"
				className={
					location.pathname == "/"
						? defaultClass + cssClass
						: defaultClass
				}
			>
				<Row>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<House />
					</Col>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<span className="nav-text">ANASAYFA</span>
					</Col>
				</Row>
			</Link>
			<Link
				to="/docs"
				className={
					location.pathname == "/docs"
						? defaultClass + cssClass
						: defaultClass
				}
			>
				<Row>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<FileCheck />
					</Col>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<span className="nav-text">DÖKÜMAN</span>
					</Col>
				</Row>
			</Link>
			<Link
				to="/settings"
				className={
					location.pathname == "/settings"
						? defaultClass + cssClass
						: defaultClass
				}
			>
				<Row>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<Gear />
					</Col>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<span className="nav-text">AYARLAR!</span>
					</Col>
				</Row>
			</Link>
			<Link
				to="/device"
				className={
					location.pathname == "/device"
						? defaultClass + cssClass
						: defaultClass
				}
			>
				<Row>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<PersonCheck />
					</Col>
					<Col
						sm={12}
						lg={12}
						md={12}
						xs={12}
						xl={12}
						className="text-center"
					>
						<span className="nav-text">CİHAZLAR</span>
					</Col>
				</Row>
			</Link>
		</Navbar>
	);
};
export default NavBar;
