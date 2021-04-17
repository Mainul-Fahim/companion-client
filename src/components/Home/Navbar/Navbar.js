import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div className="row">
            <div className="col-md-4">
                <h4 className="text-center mt-4">Companion</h4>
            </div>
            <div className="col-md-8">
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid mt-3">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link  me-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  me-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  me-5" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  me-5" href="#reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  me-5" href="/dashboard">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  me-5" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            {loggedInUser.email?loggedInUser.email:<a class="nav-link  me-5 btn-primary text-white" href="/login">Login</a>}
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
            </div>
        </div>
    );
};

export default Navbar;