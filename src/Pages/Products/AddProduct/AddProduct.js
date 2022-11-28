import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvide';
import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);


    console.log("User Data:", user);

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

    const sellerName = user?.displayName;
    const sellerEmail = user?.email;

    const handleAddProduct = (data) => {
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
                        category: data.category,
                        title: data.name,
                        sellerName: sellerName,
                        email: sellerEmail,
                        phone: data.phone,
                        image: imgData.data.url,
                        location: data.location,
                        price: data.price,
                        originalPrice: data.originalPrice,
                        condition: data.condition,
                        postedDate: data.postedDate,
                        yearOfUse: data.yearOfUse,
                        description: data.description,
                        cause: data.cause,
                    }
                    console.log("Product :", product);

                    // save product information
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
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    {/* {signUpError && <p className=' text-red-600'>{signUpError}</p>} */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Category</span> </label>
                        <select type="text"
                            {...register("category")}
                            className="input input-bordered w-full">
                            {categories.map((category) =>
                                <option key={category._id} value={category._id}>
                                    {category.title}
                                </option>)}
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                    {/* product name */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Procucts Name</span> </label>
                        <input type="text"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Product Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>Product Name is required</p>}
                    </div>

                    {/* Product Image */}
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

                    {/* Seller location */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Seller Location</span> </label>
                        <input type="text"
                            name='location'
                            {...register("location", { required: true })}
                            placeholder="Location"
                            className="input input-bordered w-full"
                        />
                        {errors.location && <p className='text-red-600'>Seller Location is required</p>}
                    </div>

                    {/* Seller Phone */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Seller Phone</span> </label>
                        <input type="text"
                            name='phone'
                            {...register("phone", { required: true })}
                            placeholder="Phone Number"
                            className="input input-bordered w-full"
                        />
                        {errors.phone && <p className='text-red-600'>Seller Phone Number is Required</p>}
                    </div>

                    {/* Sell Price */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Laptop Sale Price</span> </label>
                        <input type="text"
                            name='price'
                            {...register("price", { required: true })}
                            placeholder="Price"
                            className="input input-bordered w-full"
                        />
                        {errors.price && <p className='text-red-600'>Product Price is required</p>}
                    </div>

                    {/* Original Price */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Laptop Original Price</span> </label>
                        <input type="text"
                            name='originalPrice'
                            {...register("originalPrice", { required: true })}
                            placeholder="Original Price"
                            className="input input-bordered w-full"
                        />
                        {errors.originalPrice && <p className='text-red-600'>Product Original Price is required</p>}
                    </div>

                    {/* Year of use */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Year of Use</span> </label>
                        <input type="text"
                            name='yearOfUse'
                            {...register("yearOfUse", { required: true })}
                            placeholder="Year of Use"
                            className="input input-bordered w-full"
                        />
                        {errors.yearOfUse && <p className='text-red-600'>Product Year of Use is required</p>}
                    </div>

                    {/* Product Conditon */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Condition</span> </label>
                        <select type="text"
                            {...register("condition")}
                            className="input input-bordered w-full">
                            <option value="excellent">Excellent</option>
                            <option selected value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                        {/* {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>} */}
                    </div>

                    {/* Posted Date */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Posted Date</span> </label>
                        <input type="date"
                            name='postedDate'
                            {...register("postedDate", { required: true })}
                            placeholder="Posted Date"
                            className="input input-bordered w-full"
                        />
                        {errors.postedDate && <p className='text-red-600'>Posted Date is required</p>}
                    </div>

                    {/* Product description */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Description</span> </label>
                        <textarea type="text"
                            name='description'
                            {...register("description", { required: true })}
                            className="input input-bordered w-full"
                        />
                        {errors.description && <p className='text-red-600'>Description is Required</p>}
                    </div>

                    {/* Cause of sale */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Cause of Sale</span> </label>
                        <textarea type="text"
                            name='cause'
                            {...register("cause")}
                            className="input input-bordered w-full"
                        />
                        {errors.cause && <p className='text-red-600'>Cause of Sale is Required</p>}
                    </div>

                    <Link to='/dashboard/sellerProduct'><input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Add' /></Link>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;