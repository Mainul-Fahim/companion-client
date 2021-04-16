import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import anik from '../../../images/anik.png';
import sabbir from '../../../images/sabbir.png';

const blogData = [
    {
        title : 'How to finish any assignment smartly',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sabbir',
        authorImg : sabbir,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Anik',
        authorImg : anik,
        date : '23 April 2019'
    },
    {
        title : 'Flutter is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sabbir',
        authorImg : sabbir,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="row card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;