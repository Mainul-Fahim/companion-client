import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../../Home/Testimonial/Testimonial';


const Testimonials = () => {
   
    const [reviews,setReviews]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <section id="reviews" className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase text-white pt-2">Testimonial</h5>
                   <h1 className="text-white">What Our Customers <br/> Says </h1>
               </div>
               <div className="row card-deck mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;