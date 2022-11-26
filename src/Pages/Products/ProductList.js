import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const ProductList = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            return data;
        }
    })

    const handleDeleteCategory = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
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
        <div className=' my-16'>
            <h2 className=' text-center font-bold text-3xl mb-4'>Easy Market Product List</h2>
            <div className="overflow-x-auto">
                <table className="table w-2/3 mx-auto">

                    <thead>
                        <tr className=' font-bold'>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Posted Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr className="hover" key={product._id}>
                                    <th>{index + 1}</th>
                                    <td className=' w-24'><img src={product.image} alt="" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.postedDate}</td>
                                    <td>
                                        <Link to={`/updateProduct/${product._id}`}><button className=' btn btn-info btn-sm'> Update</button></Link>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error ml-1">Delete</label>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                    {
                        deletingProduct &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete product ${deletingProduct.title} its can't undone`}
                            successAction={handleDeleteCategory}
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

export default ProductList;