import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvide';

const OrderModal = ({ productOrder }) => {
    const { user } = useContext(AuthContext);
    console.log("Product Order :", productOrder);
    const { title, price, } = productOrder;
    // const date = format(selectedDate, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const slot = form.slot.value;
        // const name = form.name.value;
        // const email = form.email.value;
        // const phone = form.phone.value;

        // const booking = {
        //     // treatment: treatment.name,
        //     patient: name,
        //     price,
        //     slot,
        //     email,
        //     phone,
        // }

        // TODO: send data to the server

        // fetch('http://localhost:5000/orders', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             setOrder(null);
        //             toast.success('Laptop Booking Confirmed.')
        //             refetch();
        //         } else {
        //             toast.error(data.message)
        //         }
        //     })
        // and  once data is saved close the modal 
        // and display success toast
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            {/* {format(selectedDate, 'PP')} */}
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{name}</h3> */}
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" placeholder="Type here" value={date} disabled className="input input-bordered w-full" /> */}
                        {/* <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }
                        </select> */}
                        <input name='product' type="text" value={title} className="input input-bordered w-full" required disabled /> <br />
                        <input name='price' type="text" value={price} className="input input-bordered w-full" required disabled /> <br />
                        <input name='buyer' type="text" defaultValue={user?.displayName} className="input input-bordered w-full" disabled />
                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required /> <br />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" required /> <br />
                        <div className=' lg:flex justify-between'>
                            <input name='date' type="Date" placeholder="Meeting Location" className="input input-bordered lg:w-2/5" required />
                            <input name='time' type="time" placeholder="Meeting Location" className="input input-bordered lg:w-2/5" required /> <br />
                        </div>
                        <input className=' w-full btn btn-sm btn-accent' type="submit" value="Submit Order" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;