import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_Key;

    console.log("imageHostKey : ", imageHostKey);

    // const { data: categories, isLoading } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async () => {
    //         const response = await fetch('https://resale-market-server.vercel.app/categories');
    //         const data = await response.json();
    //         return data;
    //     }
    // })

    const handleAddCategory = (data) => {
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
                    const category = {
                        title: data.name,
                        image: imgData.data.url,
                        description: data.description,
                    }
                    console.log("Category :", category);

                    // Save Categories information
                    fetch('https://resale-market-server.vercel.app/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(category)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Categories ${data.name} is added successfully`)
                            navigate('/')
                            // form.reset()
                            console.log(result);
                        })

                }
            })
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className=' flex justify-center items-center '>
            <div className=' w-96 p-4'>
                <h2 className=' text-xl font-bold  text-center'>Add a New Category</h2>
                <form onSubmit={handleSubmit(handleAddCategory)}>
                    {/* {signUpError && <p className=' text-red-600'>{signUpError}</p>} */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Category Name</span> </label>
                        <input type="text"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Category Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>Category Name is required</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span> </label>
                        <input type="file"
                            name='image'
                            {...register("image", { required: true })}
                            placeholder="Image"
                            className="input input-bordered w-full"
                        />
                        {errors.photo && <p className='text-red-600'>Upload Category Photo</p>}
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

export default AddCategory;