import React from 'react';
import headerImg from '../../../images/headerImg.jpg';
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new smile <br /> Starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam saepe totam magni ducimus nesciunt nostrum!</p>
                <div className="btn btn btn-primary">Get Started</div>
            </div>
            <div className="col-md-6">
                <img src={headerImg} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;