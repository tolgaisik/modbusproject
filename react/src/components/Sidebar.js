import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import {
    HouseFill,
    GearFill,
    PersonBoundingBox,
    FileBinaryFill,
    ArrowUpSquareFill,
} from "react-bootstrap-icons";
import "../assets/sidebar.scss";
import ToTop from "./ToTop";
function App() {
    return (
        <div className="App">
            <Sidebar></Sidebar>
        </div>
    );
}

export default App;
function Sidebar() {
    return (
        <div className="side-bar bg-container">
            <Link to="/">
                <SideItemAvatar></SideItemAvatar>
            </Link>
            <Link to="/docs">
                <SideItemHome></SideItemHome>
            </Link>
            <Link to="/settings">
                <SideItemSettings></SideItemSettings>{" "}
            </Link>
            <Link to="/device">
                <SideItemDocs></SideItemDocs>
            </Link>
            <ToTop></ToTop>
        </div>
    );
}
function SideItemAvatar(props) {
    return (
        <div className="side-item side-item-avatar mx-auto">
            <span className="side-icon">
                <PersonBoundingBox></PersonBoundingBox>
            </span>
            <span className="side-text">User</span>
        </div>
    );
}

function SideItemHome(props) {
    return (
        <div className="side-item side-item-home mx-auto">
            <span className="side-icon">
                <HouseFill></HouseFill>
            </span>
            <span className="side-text">Home</span>
        </div>
    );
}

function SideItemSettings() {
    return (
        <div className="side-item side-item-settings mx-auto">
            <span className="side-icon">
                <GearFill></GearFill>
            </span>
            <span className="side-text">Settings</span>
        </div>
    );
}

function SideItemDocs() {
    return (
        <div className="side-item side-item-docs mx-auto">
            <span className="side-icon">
                <FileBinaryFill></FileBinaryFill>
            </span>
            <span className="side-text">Docs</span>
        </div>
    );
}
