import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const MangeProduct = () => {
    const [mobiles, setMobiles] = useState([]);
    function deleteProduct(id){
       fetch(`http://localhost:5000/delete/${id}`, {
           method:'DELETE'
       })
       .then(res => res.json())
       .then(result =>{
          if(result){
              alert('Product deleted successfully!!')
          }
       })
    }


    fetch('http://localhost:5000/mobiles')
    .then(res => res.json())
    .then(data => setMobiles(data));

    return (
       <div className="container">
           <div className="row mt-5">
               <div className="col-md-9 mx-auto ">
               <div className="manageProduct d-flex justify-content-between">
               <h5>Manage Product</h5>
               <h5>Total Product({mobiles.length})</h5>
               </div>
                <div className="manageProduct">
                    <table className="table">
                       <thead>
                        <tr>
                                <th>Mobile Name</th>
                                <th> Brand</th>
                                <th> Price</th>
                                <th>Action</th>
                            </tr>
                       </thead>
                       {
                           mobiles.map(mobile => <tbody>
    
                            <tr>
                                <td>{mobile.mobileName}</td>
                                <td>{mobile.mobileBrand}</td>
                                <td>${mobile.mobilePrice}</td>
                                <td>
                                    <button className="btn btn-primary mr-3">
                                    <FontAwesomeIcon icon={faEdit}/>       
                                    </button>
                                     <button onClick={()=> deleteProduct(mobile._id)} className="btn btn-danger">
                                     <FontAwesomeIcon icon={faTrash}/> 
                                     </button>
                                </td>
                            </tr>
                            </tbody>)
                            
                       }
                    </table>
                </div>
               </div>
           </div>
       </div>
    );
};

export default MangeProduct;