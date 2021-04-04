import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({
        mobileName:'',
        mobileBrand:'',
        mobilePrice:'',
        mobileImg:''
    });
    const inputValue = (e)=>{
        if(e.target.name === 'name'){
            setAddProduct({mobileName: e.target.value})
        }
        if(e.target.name === 'price'){
            setAddProduct({...addProduct, mobilePrice: e.target.value})
        }
        if(e.target.name === 'brand'){
            setAddProduct({...addProduct, mobileBrand: e.target.value})
        }
    }
    const uploadImage = event=>{
       const uploadImg = new FormData();
       uploadImg.set('key','4a25a23429eb9016e389556ac3653656');
       uploadImg.append('image', event.target.files[0])
       axios.post('https://api.imgbb.com/1/upload', uploadImg)
      .then(function (response) {
        setAddProduct({...addProduct, mobileImg:response.data.data.display_url})
      })
      .catch(function (error) {
        console.log(error);
      });
        
    }
    const submitData = (event)=>{
        const url = 'http://localhost:5000/addproduct';
        fetch(url, {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(addProduct)
        })
        .then(result =>{
            if(result.ok){
                alert('New Product added successfully!');
            }
        })
        event.preventDefault()
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto mt-5 shadow p-5">
                    <form onSubmit={submitData}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="">Mobile Name</label>
                                    <input type="text" name="name"  className="form-control" onBlur={inputValue} placeholder="Product Name"  required />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="">Price</label>
                                    <input type="text" name="price" className="form-control" onBlur={inputValue} placeholder="Enter price" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                <label htmlFor="">Brand</label>
                                <input type="text" name="brand" className="form-control" onBlur={inputValue} placeholder="Enter Brand" required />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="">Photo</label>
                                    <input type="file" className="form-control" onChange={uploadImage} required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                             
                                <textarea name="" className="form-control" placeholder="Product description..." rows="5"></textarea>
                                </div>
                        <button className="btn btn-primary float-right">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;