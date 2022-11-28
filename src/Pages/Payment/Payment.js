import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log("stripePromise : ", stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    console.log("booking : ", booking);

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    const { _id, buyer, date, email, location, phone, price, product, time } = booking;

    return (
        <div className=' font-bold my-16'>
            <h2 className="text-2xl font-bold">Payment for {product}</h2>
            <h2>Please pay <b>${price}</b> for the {product}</h2>

            <div className=" w-96 my-11">
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;