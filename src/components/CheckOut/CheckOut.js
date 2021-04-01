import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import './CheckOut.css'
import FakeData  from '../../FakeData/FakeData';
import img from '../../FakeData/img/iPhoneX-silver-1.jpg';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const {id} =  useParams();
    const {name,img,price,brand} = (FakeData[id]);
    const date = new Date();
    const placedOrder = ()=>{
        const order = {...loggedInUser, name, img, price, brand,date};
        fetch('http://localhost:5000/placeOrder', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(result =>{
            if(result.ok){
                alert('Order placed successfully')
            }
        })
    }
    return (
        <div className="container">
            <div className="row mt-3">
               <div className="col-md-9 border-right mt-3">
               <h5>CheckOut</h5>
                <div className="row">
                    <div className="col-md-10 mx-auto text-center shadow p-2 pb-3 checkOutInfo">
                        <img src={img} alt="img"/>
                        <table className="table">
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Brand</th>
                                <th>Total Price</th>
                            </tr>
                            <tr>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td>1</td>
                                <td>{brand}</td>
                                <td>${price}</td>
                            </tr>
                        </table>
                        <hr/>
                        <button onClick={placedOrder} className="btn btn-success">CheckOut</button>
                    </div>
                </div>
               </div>
               <div className="col-md-3 mt-5 text-center">
               <div className="customerInfo">
                   <h6>Customer information</h6>
                    <img src={loggedInUser.userPhoto} alt=""/>
                    <h6>Name: {loggedInUser.userName}</h6>
                    <hr/>
                    <h6>{loggedInUser.email}</h6>
                </div>
               </div>
            </div>
        </div>
    );
};

export default CheckOut;