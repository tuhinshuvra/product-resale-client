import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductUpdate = () => {
    const storedProduct = useLoaderData();
    console.log("storedProduct:", storedProduct);
    const [product, setProduct] = useState({ storedProduct });
    const navigate = useNavigate();

    const handleProductUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/products/${storedProduct._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Updated Successfully!')
                    console.log(data);
                    navigate('/productList')
                }
            })
    }

    const handleInputUpdate = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        const newCategory = { ...product }
        newCategory[field] = value;
        setProduct(newCategory)
        // console.log(newCategory);
    }
    return (
        <div className=' text-black border-red-600 my-24'>
            <h2 className=' text-center font-bold text-3xl mb-4'>Update Product {storedProduct.title}</h2>

            <form onSubmit={handleProductUpdate} className="lg:w-1/2 mx-auto" >
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product Name</span> </label>
                    <input onChange={handleInputUpdate} type="text" name='title' defaultValue={storedProduct.title} className="input input-bordered w-full" /><br />
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span> </label>
                    <input onChange={handleInputUpdate} type="text" name='description' defaultValue={storedProduct.description} className="input input-bordered w-full" /><br />
                </div>

                <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Update' />
            </form >
        </div >
    );
};

export default ProductUpdate;