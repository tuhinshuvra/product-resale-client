import React, { useEffect, useState } from 'react';

const CatagoryDisplay = () => {
    const [categoryProductList, setCategoryProductList] = useState(null);

    useEffect(() => {
        // fetch(`https://resale-market-server.vercel.app/products?category=${id}`)

    }, [])

    return (
        <div>
            <h2>Here show all Category</h2>
        </div>
    );
};

export default CatagoryDisplay;