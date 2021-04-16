import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blogs></Blogs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;