import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                {isAdmin && <div>
                    <li>
                        <Link to="/serviceList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Service List</span>
                        </Link>
                    </li>
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
                </div>}
                {!isAdmin && <div>
                    <li>
                        <Link to="/checkout/id" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Checkout</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderedList" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>OrderedList</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;