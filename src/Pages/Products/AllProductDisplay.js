import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide';
import useVerification from '../../hooks/useVerification';
import BookingModal from '../Bookings/BookingModal';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const AllProductDisplay = ({ product }) => {
    const { user } = useContext(AuthContext);
    const [productOrder, setProductOrder] = useState(null);
    const [reportedProduct, setReportedProduct] = useState(null);
    const [isVerified] = useVerification(user?.email);

    const { _id, category, title, sellerName, email, phone, location, originalPrice, price, image, condition, postedDate, yearOfUse, cause, description } = product;

    const closeModal = () => {
        setReportedProduct(null);
    }

    const productReportHandler = (id) => {
        fetch(`https://resale-market-server.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                // authorization: `brarer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Reported Successfully.')
                }
            })
    }

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
                {/* <p><b>Seller Name: </b>{sellerName}, <b>Verified: </b>{isVerified ? <b className=' text-green-800'>&#10004;</b> : <b>X</b>}</p> */}
                <p><b>Seller Name: </b>{sellerName}, <b>Verified: </b>{isVerified ? <b className=' text-green-800'>&#10004;</b> : <b className=' text-green-800'>&#10004;</b>}</p>

                <div className='flex justify-between'>
                    <div className=" float-right">
                        <label
                            // disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn bg-primary btn-sm text-white uppercase border-none"
                            onClick={() => setProductOrder(product)}
                        > {user?.email ? <>Book Now</> : <Link to="/login">Book Now</Link>}
                        </label>
                    </div>
                    {/* <button
                        onClick={() => productReportHandler(_id)}
                        className=' btn btn-sm btn-info'>
                        {user?.email ? <>Report</> : <Link to="/login">Report</Link>}
                    </button> */}
                    <label onClick={() => setReportedProduct(_id)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">
                        {user?.email ? <>Report</> : <Link to="/login">Report</Link>}
                    </label>
                </div>
                {
                    productOrder &&
                    <BookingModal
                        productOrder={productOrder}
                        setProductOrder={setProductOrder}
                    ></BookingModal>
                }
                {
                    reportedProduct &&
                    <ConfirmationModal
                        title={`Are you sure you want to report?`}
                        message={`If you report  the product its can't undone`}
                        successAction={productReportHandler}
                        successButtonName="Report"
                        modalData={reportedProduct}
                        closeModal={closeModal}
                    ></ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllProductDisplay;