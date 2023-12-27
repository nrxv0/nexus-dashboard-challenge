import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {

    return (
        <div className="Sidebar">
        <div className="logo">
            <img src="path-to-your-logo.png" alt="Company Logo" />
        </div>
        <div className="links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/rooms">Rooms</Link>
        </div>
        <div className="bottom-links">
            <Link to="/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
        </div>
    </div>
    
    )
}

export default Sidebar;