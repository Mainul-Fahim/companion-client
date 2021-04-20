import React from 'react';
import writing from '../../../images/writing.jpg';
import './Projects.css';
const Projects = () => {
    return (
        <div>
            <section className="d-flex justify-content-center mt-5 pt-5 mb-5">
            <div className="row w-75 mb-5 pb-5">
                <div className="col-md-5">
                    <img src={writing} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-7 mt-3">
                    <h2>Our Current <br/>Featured Project</h2>
                    <p className="secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt quia perspiciatis quasi amet incidunt enim pariatur eveniet est. Veritatis sapiente possimus provident facere ipsam sit maxime, quasi aliquam distinctio praesentium ipsa! Eligendi eveniet, vel fugiat ex obcaecati explicabo eos unde quasi amet accusantium doloribus debitis quidem cumque, animi molestias, placeat enim nulla omnis fuga mollitia nisi quaerat esse. Quas ab est, nam molestiae eum dolore sunt. Porro maiores dolor sed eos. Illo minima libero odit .</p>
                    <button className="btn btn-primary mt-3">Get Started</button>
                </div>
            </div>
        </section>

        </div>
    );
};

export default Projects;