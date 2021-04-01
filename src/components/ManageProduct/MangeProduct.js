import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const MangeProduct = () => {
    return (
       <div className="container">
           <div className="row mt-5">
               <div className="col-md-9 mx-auto ">
               <h5>Manage Product</h5>
                <div className="manageProduct">
                    <table className="table table-striped">
                       <thead>
                        <tr>
                                <th>Mobile Name</th>
                                <th> Brand</th>
                                <th> Price</th>
                                <th>Action</th>
                            </tr>
                       </thead>
                        <tbody>
                        <tr>
                            <td>Symphony i120</td>
                            <td>symphony</td>
                            <td>$120</td>
                            <td>
                                <button className="btn btn-primary mr-3">
                                <FontAwesomeIcon icon={faEdit}/>       
                                </button>
                                 <button className="btn btn-danger">
                                 <FontAwesomeIcon icon={faTrash}/> 
                                 </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Symphony i120</td>
                            <td>symphony</td>
                            <td>$120</td>
                            <td>
                                <button className="btn btn-primary mr-3">
                                <FontAwesomeIcon icon={faEdit}/>       
                                </button>
                                 <button className="btn btn-danger">
                                 <FontAwesomeIcon icon={faTrash}/>  
                                 </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Symphony i120</td>
                            <td>symphony</td>
                            <td>$120</td>
                            <td>
                                <button className="btn btn-primary mr-3">
                                <FontAwesomeIcon icon={faEdit}/>       
                                </button>
                                 <button className="btn btn-danger">
                                 <FontAwesomeIcon icon={faTrash}/>  
                                 </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Symphony i120</td>
                            <td>symphony</td>
                            <td>$120</td>
                            <td>
                                <button className="btn btn-primary mr-3">
                                <FontAwesomeIcon icon={faEdit}/>       
                                </button>
                                 <button className="btn btn-danger">
                                 <FontAwesomeIcon icon={faTrash}/>  
                                 </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Symphony i120</td>
                            <td>symphony</td>
                            <td>$120</td>
                            <td>
                                <button className="btn btn-primary mr-3">
                                <FontAwesomeIcon icon={faEdit}/>       
                                </button>
                                 <button className="btn btn-danger">
                                 <FontAwesomeIcon icon={faTrash}/>  
                                 </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
               </div>
           </div>
       </div>
    );
};

export default MangeProduct;