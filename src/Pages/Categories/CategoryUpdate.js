import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CategoryUpdate = () => {
    const storedCategory = useLoaderData();
    console.log("storedCategory:", storedCategory);
    const [category, setCategory] = useState({ storedCategory });
    const navigate = useNavigate();

    const handleUpdateCategory = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/categories/${storedCategory._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Category Updated Successfully!')
                    console.log(data);
                }
            })
        navigate('/categoryList')
    }

    const handleInputUpdate = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        const newCategory = { ...category }
        newCategory[field] = value;
        setCategory(newCategory)
        console.log(newCategory);
    }
    return (
        <div className=' text-black border-red-600 my-24'>
            <h2 className=' text-center font-bold text-3xl mb-4'>Update Category {storedCategory.title}</h2>

            <form onSubmit={handleUpdateCategory} className="lg:w-1/2 mx-auto" >
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Category Name</span> </label>
                    <input onChange={handleInputUpdate} type="text" name='title' defaultValue={storedCategory.title} className="input input-bordered w-full" required /><br />
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span> </label>
                    <input onChange={handleInputUpdate} type="text" name='description' defaultValue={storedCategory.description} className="input input-bordered w-full" required /><br />
                </div>

                <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Update' />
            </form >
        </div >
    );
};

export default CategoryUpdate;