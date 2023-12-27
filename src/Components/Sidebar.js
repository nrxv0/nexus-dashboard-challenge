import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {

    return (
        <div className="Sidebar">
            <Link to="/dashboard">Dashbord</Link>
            <Link to="/users">Users</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/rooms">Rooms</Link>
        </div>
    )
}

export default Sidebar;