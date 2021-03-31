import React from 'react';
import './Header.css'
import {
    Link
} from "react-router-dom";


const Header = () => {
    return (
        <div className="header py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="logo">
                            <Link to="/home">Mobile <span>House</span></Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <nav>
                            <ul className="d-flex justify-content-end mb-0">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/order">Order</Link>
                                </li>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                                <li>
                                    <Link to="/deals">Deals</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <div className="loginBtn">
                            <button className="btn btn-info">
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;