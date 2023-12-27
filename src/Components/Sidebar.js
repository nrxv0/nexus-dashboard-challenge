import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBook, faGear, faRightFromBracket, faUsers, faHouse} from '@fortawesome/free-solid-svg-icons'

import "../styles/sidebar.css";

const Sidebar = () => {

    return (
        <div className="Sidebar">
        <div className="logo">
            <img src="/" alt="HOTEL" />
        </div>
        <div className="links">
            <Link to="/dashboard">
            <FontAwesomeIcon icon={faBars} />
            <span className="icon-text">Dashboard</span>
                </Link>
            <Link to="/users">
            <FontAwesomeIcon icon={faUsers} className="fausers"/>
            <span className="icon-text-diff-margin">Users</span>
                </Link>
            <Link to="/booking">
            <FontAwesomeIcon icon={faBook} />
            <span className="icon-text">Booking</span>
            
            </Link>
            <Link to="/rooms">
            <FontAwesomeIcon icon={faHouse} className="fahouse"/>
            <span className="icon-text-diff-margin">Rooms</span>
                </Link>
        </div>
        <div className="bottom-links">
            <Link to="/settings">
            <FontAwesomeIcon icon={faGear} />
            <span className="icon-text">Settings</span>
            
            </Link>
            <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="icon-text">Logout</span>
                
            </Link>
        </div>
    </div>
    
    )
}

export default Sidebar;