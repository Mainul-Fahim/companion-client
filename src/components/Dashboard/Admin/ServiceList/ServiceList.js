import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './ServiceList.css';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://safe-dusk-28084.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)
            });
    }, [])
    return (
        <section>

            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mb-5">
                    <h1 className="text-center">ServiceList</h1>
                    <br />
                    <div style={{ border: '1px solid cyan', height: '500px' }} className="ms-5 pt-5 ps-5 pe-5 table-responsive-sm">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Service</th>
                                    <th>Pay with</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allOrders.map(service => <tr>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.serviceName}</td>
                                        <td>{service.orderDate}</td>
                                        <td>Pending</td></tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default ServiceList;