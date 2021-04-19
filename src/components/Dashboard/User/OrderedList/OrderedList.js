import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './OrderedList.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const OrderedList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            });
    }, [])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h1 className="text-center">Ordered List</h1>
                    <br />
                    <div style={{ border: '1px solid cyan', height: '500px' }} className="ms-5 pt-5 ps-5 row">
                        {
                            orders.map(order => <div className="col-md-4">
                                <div className="d-flex justify-content-between pt-2">
                                    <img style={{ height: '50px'}} src={order.imageUrl} alt=""/>
                                    <p style={{ backgroundColor: 'rgb(255, 131, 131)',borderRadius:'5px',color: 'black' }}>Pending</p>
                                </div>
                                <h5>Name: {order.name}</h5>
                                <p className="secondary">{order.description}</p>
                                <small>{order.orderedDate}</small>    
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrderedList;