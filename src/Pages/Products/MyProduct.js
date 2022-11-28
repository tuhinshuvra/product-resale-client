import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvide';
import MyProductDisplay from './AddProduct/MyProductDisplay';

const MyProduct = () => {
    const [myProducts, setMyProducts] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log('Login User Email : ', user.email);

    useEffect(() => {
        fetch(`https://resale-market-server.vercel.app/productOnMail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user?.email])

    return (
        <div>
            <h2 className=' text-center font-bold text-3xl my-4'>All Product of {user?.displayName}  </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    myProducts.map(product =>
                        <MyProductDisplay
                            key={product._id}
                            product={product}
                        ></MyProductDisplay>
                    )
                }
            </div>
        </div>
    );
};

export default MyProduct;