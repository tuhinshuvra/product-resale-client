import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderModal from '../Orders/OrderModal';
import './ProductDisplay.css';

const ProductDisplay = ({ product }) => {
    const [productOrder, setProductOrder] = useState(null);

    const { _id, title, image, description } = product;

    // const handleBookedProduct = (product) => {
    //     setProductOrder(product);
    // }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Product" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    <Link to="/dashboard/myOrders">
                        <button onClick={() => handleBookedProduct(product)} className="btn btn-primary btn-sm">Book Now</button>
                    </Link>
                </div> */}
                <div className="">
                    <label
                        // disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn bg-primary text-white uppercase border-none"
                        onClick={() => setProductOrder(product)}
                    >Book Now
                    </label>
                </div>
                {
                    productOrder &&
                    <OrderModal
                        productOrder={productOrder}
                    ></OrderModal>
                }
            </div>
        </div>


    );
};

export default ProductDisplay;