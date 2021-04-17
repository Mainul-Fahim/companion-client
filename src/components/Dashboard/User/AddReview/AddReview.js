import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddReview.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const AddReview = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl,setImageUrl]=useState(null);

    const onSubmit = data => {
        console.log(data);
        const reviewData={
            name: data.name,
            //id: data.id,
            description:data.description,
            designation:data.designation,
            imageUrl: imageUrl,
        };
        const url=`http://localhost:5000/addReview`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res =>{
            console.log(res)})
           
    };

    const handleImageUpload=event=>{
        console.log(event.target.files);
           const imageData=new FormData();
           imageData.set('key','72441dede61096c05221caead391c12a');
           imageData.append('image',event.target.files[0]);

           axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
}
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mb-5 addreview">
                    <h1 className="text-center">Add Review</h1>
                    <br/>
                    <div style={{border: '1px solid cyan',height: '500px'}} className="ms-5 pt-5 ps-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Name</h5>
                        <input name="name" placeholder="Your Name" ref={register} />
                        <br />
                        <h5>Designation</h5>
                        <input name="designation" placeholder="Designation" ref={register({ required: true })} />
                        <br />
                        <h5>Description</h5>
                        <input name="description" placeholder="Description" ref={register({ required: true })} />
                        <br />
                        <h5>Add Photo</h5>
                        <input name="example" type="file" onChange={handleImageUpload} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br/>
                        <input type="submit" />
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;