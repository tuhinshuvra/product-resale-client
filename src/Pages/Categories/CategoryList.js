import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const CategoryList = () => {
    const [deletingCategory, setDeletingCategory] = useState(null);

    const closeModal = () => {
        setDeletingCategory(null);
    }

    const { data: categories = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/categories');
            const data = await response.json();
            return data;
        }
    })

    // const handleMakeAdmin = (id) => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {

    //             // authorization: `brarer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('User Make Admin Successfully.')
    //                 refetch()
    //             }
    //         })
    // }

    const handleDeleteCategory = (category) => {
        fetch(`http://localhost:5000/categories/${category._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${category.title} Deleted Successfully!`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className=' text-center font-bold text-lg'>Easy Market Product All Category</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className=' font-bold'>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, index) =>


                                <tr className="hover" key={category._id}>
                                    <th>{index + 1}</th>
                                    <td className=' w-24'><img src={category.image} alt="" /></td>
                                    <td>{category.title}</td>
                                    {/* <td> */}
                                    {/* {
                                            user?.role === 'admin' ? <b className=' text-green-800'> Admin</b> :
                                                <button onClick={() => handleMakeAdmin(user._id)} className=" btn btn-sm btn-info">
                                                    <span> Make Admin</span>
                                                </button>
                                        } */}
                                    {/* </td> */}
                                    <td> <label onClick={() => setDeletingCategory(category)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                </tr>
                            )
                        }

                    </tbody>
                    {
                        deletingCategory &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete category ${deletingCategory.title} its can't undone`}
                            successAction={handleDeleteCategory}
                            successButtonName="Delete"
                            modalData={deletingCategory}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    }
                </table>
            </div>
        </div>
    );
};

export default CategoryList;