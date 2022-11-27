import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [deleteBooking, setDeleteBooking] = useState(null);

    const closeModal = () => {
        setDeleteBooking(null);
    }

    const { data: myBookings = [], refetch } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/allBooking?email=${user?.email}`);
            const data = await response.json();
            return data;
        }
    })

    const handleBookingDelete = (myBookings) => {
        fetch(`http://localhost:5000/bookings/${myBookings._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${myBookings.product} Deleted Successfully!`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-center font-bold  my-4 text-3xl'>All My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Price</th>
                            {/* <th>Buyer</th> */}
                            {/* <th>Phone</th> */}
                            {/* <th>Email</th> */}
                            <th>Meet Location</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* buyer date email location    phone  price  product time _id */}
                    <tbody>
                        {
                            myBookings?.map((book, index) =>

                                <tr key={book._id} className=" hover">
                                    <th>{index + 1}</th>
                                    <td>{book.product}</td>
                                    <td>{book.price}</td>
                                    {/* <td>{book.buyer}</td> */}
                                    {/* <td>{book.phone}</td> */}
                                    {/* <td>{book.email}</td> */}
                                    <td>{book.location}</td>
                                    <td>{book.date}</td>
                                    <td>{book.time}</td>
                                    <td>
                                        {
                                            // book.price && !book.paid &&
                                            <Link
                                                to={`/dashboard/payment/${book._id}`}>
                                                <button className=' btn btn-primary btn-sm'
                                                >Pay</button></Link>
                                        }
                                        {
                                            book.price && book.paid &&
                                            <span
                                                className=' btn btn-success btn-sm'
                                            >Paid</span>
                                        }
                                        <label onClick={() => setDeleteBooking(book)} htmlFor="confirmation-modal" className="btn btn-sm btn-error ml-1">Delete</label>
                                    </td>
                                    {/* <td>${book.price}</td> */}
                                </tr>)
                        }

                    </tbody>
                    {
                        deleteBooking &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete booking?`}
                            message={`If you delete category ${deleteBooking.product} its can't undone`}
                            successAction={handleBookingDelete}
                            successButtonName="Delete"
                            modalData={deleteBooking}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    }
                </table>
            </div>
        </div >
    );
};

export default MyBookings;