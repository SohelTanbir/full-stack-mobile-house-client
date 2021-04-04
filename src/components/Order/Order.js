import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { userContext } from '../../App';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/orders?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
        }, [])
       
    return (
        <div className="container p-5">
           <div className="row">
               <div className="col-md-10 col-sm-12 shadow mx-auto p-3">
               <div className="ordersInfo px-1 d-flex justify-content-between">
               <h5 className="text-info">Orders information</h5>
               <h5 className="text-info">Total orders({orders.length})</h5>
               </div>
               <table className="table mt-2">
                          <thead>
                                 <tr>
                                    <th>SI No</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Payment</th>
                                    <th>Date</th>
                                </tr>
                          </thead>
                           {
                               orders.map(order => <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{order.mobileName}</td>
                                    <td>${order.mobilePrice}</td>
                                    <td>1</td>
                                    <td>Unpaid</td>
                                    <td>{order.formateDate}</td>
                                </tr>
                            </tbody>)
                           }
                        </table>
                        {orders.length?'':<div className="loader text-center">
                            <Spinner animation="border" variant="primary" />
                        </div>}
               </div>
           </div>
        </div>
    );
};

export default Order;