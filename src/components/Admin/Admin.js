import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faEdit, faPen, faUserPlus, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import MangeProduct from '../ManageProduct/MangeProduct';




const Admin = () => {
    
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col-md-2 bg-dark sidebar">
                   <h5 className="text-white"><FontAwesomeIcon icon={faUsersCog} style={{ color: "white" }}/> Mobile <span>House</span></h5>
                   <ul>
                       <li>
                            <Link to="manageproduct">
                                <FontAwesomeIcon icon={faEdit}/> Manage Product
                            </Link>
                       </li>
                       <li>
                            <Link to="addproduct"><FontAwesomeIcon icon={faUserPlus}/> Add Product</Link>
                       </li>
                       <li>
                            <Link to="admin"><FontAwesomeIcon icon={faPen} /> Edit product</Link>
                       </li>
                       <li>
                            <Link to="admin"><FontAwesomeIcon icon={faCog} /> Setting</Link>
                       </li>
                   </ul>
               </div>
               <div className="col-md-10">
                   <h4>Add mobile</h4>
                  
               </div>
           </div>
       </div>
    );
};

export default Admin;