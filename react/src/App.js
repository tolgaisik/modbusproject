import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Docs from "./pages/Docs";
import MyDevices from "./pages/MyDevices";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import "./assets/main.scss";

export default function App() {
	return (
		<Router>
			<div className="app">
				<NavBar />
				<Switch>
					<Route exact path="/docs">
						<Docs />
					</Route>
					<Route exact path="/settings">
						<Settings />
					</Route>
					<Route exact path="/device">
						<MyDevices />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
