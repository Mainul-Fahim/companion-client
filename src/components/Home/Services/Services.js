import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import creativeWriting from '../../../images/creativeWriting.jpg';
import assignments from '../../../images/Assignment.jpg';
import presentation from '../../../images/Presentation.jpg';

const servicesData = [
    {
        name: 'Creative Writing',
        image: creativeWriting
    },
    {
        name: 'Homework/Assignment Help',
        image: assignments
    },
    {
        name: 'Video Presentation Help',
        image: presentation
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5>Our Services</h5>
                <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;