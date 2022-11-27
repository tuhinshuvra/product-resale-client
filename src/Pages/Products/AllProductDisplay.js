import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide';
import useVerification from '../../hooks/useVerification';
import OrderModal from '../Orders/OrderModal';

const AllProductDisplay = ({ product }) => {
    const { user } = useContext(AuthContext);
    const [productOrder, setProductOrder] = useState(null);
    const [isVerified] = useVerification(user?.email);
    // console.log("Product :", product);
    const { _id, category, title, sellerName, email, phone, location, originalPrice, price, image, condition, postedDate, yearOfUse, cause, description } = product;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Product" /></figure>
            </div>
            <div className="card-body">

                <h2 className="card-title">{title}</h2>
                <p className='flex justify-between'>
                    <span> <b>Original Price : </b>৳{originalPrice}</span>
                    <span> <b>Sale Price : </b>৳{price}</span>
                </p>
                <p className='flex justify-between'>
                    <span><b>Location:</b>{location}</span>
                    <span><b>Phone:</b>{phone}</span>
                </p>
                <p><b>Email: </b>{email}</p>
                <p className='flex justify-between'>
                    <span><b>Posted: </b>{postedDate}</span>
                    <span><b>Use: </b>{yearOfUse} year</span>
                </p>

                <p><b>Conditon: </b>{condition}</p>
                <p><b>Cause of Sale: </b>{cause}</p>
                <p><b>Description: </b>{description}</p>
                <p><b>Seller Name: </b>{sellerName}, <b>Verified: </b>{isVerified ? <b className=' text-green-800'>&#10004;</b> : <b>X</b>}</p>

                <div className=" float-right">
                    <label
                        // disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn bg-primary btn-sm text-white uppercase border-none"
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

export default AllProductDisplay;