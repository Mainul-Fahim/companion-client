import ServiceDetail from '../ServiceDetail/ServiceDetail';
import React, { useEffect, useState } from 'react';

const Services = () => {
    
    const [services,setServices]=useState([]);
    useEffect(() =>{
        fetch('https://safe-dusk-28084.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <section id="services">
            <div className="text-center mt-5">
                <h5>Our Services</h5>
                <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;