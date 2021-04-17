import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'200px'}} src={service.imageUrl} alt=""/>
            <h5 className="mt-3 mb-3">{service.serviceName}</h5>
            <strong>{service.price}</strong>
            <p className="secondary">{service.description}</p>
            <button className="btn btn-primary">Buy Now</button>
        </div>
    );
};

export default ServiceDetail;