import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_Key;

    // console.log("imageHostKey : ", imageHostKey);

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        title: data.name,
                        image: imgData.data.url,
                        description: data.description,
                        category: data.category,
                    }
                    console.log("Product :", product);

                    // Save Categories information
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Product ${data.name} is added successfully`)
                            navigate('/')
                            // form.reset()
                            console.log(result);
                        })

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' flex justify-center items-center '>
            <div className=' w-96 p-4'>
                <h2 className=' text-xl font-bold  text-center'>Add a New Product</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    {/* {signUpError && <p className=' text-red-600'>{signUpError}</p>} */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Category</span> </label>
                        <select type="text"
                            {...register("category")}
                            className="input input-bordered w-full">
                            {categories.map((category) =>
                                <option key={category._id} value={category.title}>
                                    {category.title}
                                </option>)}
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Procucts Name</span> </label>
                        <input type="text"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Category Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>Product Name is required</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span> </label>
                        <input type="file"
                            name='image'
                            {...register("image", { required: true })}
                            placeholder="Image"
                            className="input input-bordered w-full"
                        />
                        {errors.photo && <p className='text-red-600'>Upload Product Photo</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Description</span> </label>
                        <textarea type="description"
                            name='description'
                            {...register("description", { required: true })}
                            className="input input-bordered w-full"
                        />
                        {errors.description && <p className='text-red-600'>Description is required</p>}
                    </div>

                    <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Add' />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;