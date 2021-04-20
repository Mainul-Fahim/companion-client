import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './ManageService.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const ManageService = () => {
    
    const [services,setServices]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    const deleteService=id=>{
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result =>{
            console.log("deleted",result);
            const deletedBook =document.getElementById('deletedService');
            deletedBook.style.display = 'none';
        })
   }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mb-5">
                    <h1 className="text-center">Manage Services</h1>
                    <br/>
                    <div style={{border: '1px solid cyan',height: '500px'}} className="ms-5 pt-5 ps-5 pe-5 table-responsive-sm">
                    <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                services.map(service =><tr id="deletedService">
                                    <td>{service._id}</td>
                                    <td>
                                    {service.serviceName}</td>
                                    <td>{service.description}</td>
                                    <td>{service.price}</td>
                                    <td><button onClick={() =>deleteService(service._id)} className="btn btn-primary">Delete</button></td></tr>)
                            }
                       
                        
                    </tbody>
                </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;