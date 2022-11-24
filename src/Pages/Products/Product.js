import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Product.css';
import ProductDisplay from './ProductDisplay';

const Product = () => {
    const categoryProducts = useLoaderData();
    console.log("productCategory : ", categoryProducts);
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-24'>
            {/* <h2>This is Product Page</h2> */}
            {
                categoryProducts.map(product =>
                    <ProductDisplay
                        key={product._id}
                        product={product}
                    ></ProductDisplay>
                )
            }

        </div>
    );
};

export default Product;