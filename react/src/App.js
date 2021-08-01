import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Docs from "./pages/Docs";
import MyDevices from "./pages/MyDevices";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
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
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
