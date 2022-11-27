import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductDisplay from './CategoryProductDisplay';
import './Product.css';

const Product = () => {
    const categoryProducts = useLoaderData();
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-24'>
            {
                categoryProducts.map(product =>
                    <CategoryProductDisplay
                        key={product._id}
                        product={product}
                    ></CategoryProductDisplay>
                )
            }
        </div>
    );
};

export default Product;