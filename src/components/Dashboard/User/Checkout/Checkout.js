import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.css';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    console.log(id);
    const [serviceDetails, setServiceDetails] = useState([]);
    const [checkOutDetails, setCheckOutDetails] = useState([]);
    const [checkOutDate, setCheckOutDate] = useState({ orderDate: new Date() });
    const [orderDetails, setOrderDetails] = useState({});
    const [shippingData, setShippingData] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const { serviceName, imageUrl, description } = data;
                const serviceData = { serviceName, imageUrl, description };
                console.log(serviceData);
                console.log(id);
                setOrderDetails(serviceData);
                setCheckOutDetails(data);
            });
    }, [id])

    const onSubmit = data => {
        setShippingData(data);
      };
    const handlePaymentSuccess = paymentId => {
      
        const orderedBook = { ...loggedInUser, ...checkOutDate, ...orderDetails,paymentId ,shipment:shippingData};
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data)
                    alert("successfully Placed");
            });
      }
    
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h1 className="text-center">Checkout</h1>
                    <br />
                    <div style={{ border: '1px solid cyan', height: '500px' }} className="ms-5 pt-5 ps-5">
                        <div className="row">
                            <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
                                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                                    {errors.name && <span className="error">Name is required</span>}

                                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                                    {errors.email && <span className="error">Email is required</span>}

                                    <input name="address" defaultValue={checkOutDetails.serviceName} ref={register({ required: true })} placeholder="Your Address" />
                                    {errors.address && <span className="error">Address is required</span>}

                                    <input type="submit" />
                                </form>
                            </div>
                            <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                                <h2>Please Pay for me</h2>
                                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/orderedList`}><button onClick={handleCheckOut} className="btn btn-primary">Checkout</button></Link> */}
                </div>
            </div>
        </section>
    );
};

export default Checkout;