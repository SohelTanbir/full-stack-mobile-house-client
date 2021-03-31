import React from 'react';
import { useHistory } from 'react-router';
import './ProductCard.css'

const ProductCard = (props) => {
    const {name, price, img, id} = props.product;
    const history = useHistory();
    const buyProduct = ()=>{
        history.push('/checkout')
    }
    return (
        <div className="card">
            <img src={img} alt=""/>
            <div className="productInfo d-flex justify-content-between p-2">
            <h6>{name} (${price})</h6>
            <button onClick={()=>buyProduct()} className="btn btn-success">Buy now</button>
            </div>
        </div>
    );
};

export default ProductCard;