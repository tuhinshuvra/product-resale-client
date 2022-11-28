import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import AllProductDisplay from './AllProductDisplay';

const AllProduct = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoding] = useState(true);

    if (loading) {
        <Loading></Loading>
    }

    useEffect(() => {
        fetch('https://resale-market-server.vercel.app/allProducts')
            .then(response => response.json())
            .then(data => {
                setAllProduct(data)
                setLoding(false);
            })
    }, [])
    return (
        <div className=' mt-24'>
            <h2 className=' text-center text-4xl font-bold my-7'>Resale Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allProduct.map(product =>
                        <AllProductDisplay
                            key={product._id}
                            product={product}
                        ></AllProductDisplay>)
                }
            </div>
        </div>
    );
};

export default AllProduct;