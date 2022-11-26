import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';

const ProductDisplay = ({ product }) => {

    const { _id, title, image, description } = product;

    const handleBookedProduct = (product) => {
        console.log(product);
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Product" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to="/dashboard/myOrders"><button onClick={() => handleBookedProduct(product)} className="btn btn-primary btn-sm">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;