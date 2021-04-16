import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Make Admin</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/checkout" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Checkout</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;