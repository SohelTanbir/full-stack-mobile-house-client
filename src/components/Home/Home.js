import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';


const Home = () => {
    const [mobiles, setMobiles] = useState([]);
    fetch('https://mobile-house.herokuapp.com/mobiles')
    .then(res => res.json())
    .then(data => setMobiles(data))


    return (
        <div className="home">
           <div className="container">
               <div className="row">
                   <div className="col-md-7 mx-auto">
                       <div className="searchBox">
                           <input type="search" placeholder="Search Mobile"/>
                           <input type="submit" className="btn btn-danger" value="Search"/>
                       </div>
                   </div>
               </div>
               <div className="productArea">
                    <h5>New Products</h5>
                    {
                        mobiles.map(product => <ProductCard product={product}/> )
                    }                
                </div>
           </div>
        </div>
    );
};

export default Home;