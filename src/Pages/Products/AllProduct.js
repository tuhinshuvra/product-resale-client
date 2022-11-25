import React, { useEffect, useState } from 'react';
import AllProductDisplay from './AllProductDisplay';

const AllProduct = () => {
    const [allPproduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(response => response.json())
            .then(data => setAllProduct(data))
    }, [])
    return (
        <div className=' mt-24'>
            <h2 className=' text-center text-4xl font-bold my-7'>Resale Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allPproduct.map(product =>
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