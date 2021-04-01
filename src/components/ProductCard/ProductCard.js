import React from 'react';
import { useHistory } from 'react-router';
import './ProductCard.css'

const ProductCard = (props) => {
    const id = 1;
    const {mobileName, mobilePrice, mobileImg, _id} = props.product;
    const history = useHistory();
    const buyProduct = id =>{
       
        history.push(`/checkout/${id}`)
    }
    return (
        <div className="card">
            <img src={mobileImg} alt=""/>
            <div className="productInfo d-flex justify-content-between p-2">
            <h6>{mobileName} (${mobilePrice})</h6>
            <button onClick={()=>buyProduct(id)} className="btn btn-success">Buy now</button>
            </div>
        </div>
    );
};

export default ProductCard;