import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const ReportedProductList = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://resale-market-server.vercel.app/reportedProducts?status=reported');
            const data = await response.json();
            return data;
        }
    })

    const handleDeleteUser = (product) => {
        console.log(product);
        fetch(`https://resale-market-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${product.title} Deleted Successfully!`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className=' text-center font-bold text-3xl lg:my-6'>Manage Reporeted Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className=' font-bold'>
                            <th>SL</th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Posted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr className="hover" key={product._id}>
                                    <th>{index + 1}</th>
                                    <td className=' w-20'> <img src={product.image} alt="" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.sellerName}</td>
                                    <td>{product.postedDate}</td>
                                    <td> <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                </tr>
                            )
                        }

                    </tbody>
                    {
                        deletingProduct &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete ${deletingProduct.title} its can't undone`}
                            successAction={handleDeleteUser}
                            successButtonName="Delete"
                            modalData={deletingProduct}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    }
                </table>
            </div>
        </div>
    );
};

export default ReportedProductList;