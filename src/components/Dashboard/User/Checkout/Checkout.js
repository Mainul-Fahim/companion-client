import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [serviceDetails,setServiceDetails]=useState([]);
    const [checkOutDetails, setCheckOutDetails] = useState([]);
    const [checkOutDate, setCheckOutDate] = useState({ orderDate: new Date() });
    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServiceDetails(data)});
    },[])
    useEffect(() => {

        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const { serviceName } = data;
                const serviceData = { serviceName };
                console.log(serviceData);
                setOrderDetails(serviceData);
                setCheckOutDetails(data);
            });
    }, [id])
    const handleCheckOut = () => {

        const orderedBook = { ...loggedInUser, ...checkOutDate, ...orderDetails };
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                        <h3>{checkOutDetails.serviceName} id: {id}</h3>
                        {/* <h4>{checkOutDetails.price}</h4> */}
                        <Link to={`/orderedList`}><button onClick={handleCheckOut} className="btn btn-primary">Checkout</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;