import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const ManageService = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex justify-content-center">
                    <h1>Manage Services</h1>
                </div>
            </div>
        </section>
    );
};

export default ManageService;