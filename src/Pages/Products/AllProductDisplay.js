import React from 'react';

const AllProductDisplay = ({ product }) => {
    const { title, price, mobile, location, image, description } = product;

    return (
        <div>
            {/* <h2>This is Product Page</h2> */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">Book Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductDisplay;