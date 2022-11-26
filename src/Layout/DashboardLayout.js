import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvide';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li className='mb-2 font-bold'><Link to="/dashboard">My Products</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li className='mb-2 font-bold'><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link className='font-bold' to="/dashboard/addCategory">Add Category</Link></li>
                                <li><Link className='font-bold' to="/dashboard/categoryList">Category List</Link></li>
                                <li className='mb-2 font-bold'><Link to="/dashboard/addProduct">Add Product</Link></li>
                                <li><Link className='font-bold' to="/dashboard/allProducts">All Products</Link></li>
                                {/* <li className='mb-2 font-bold'><Link to="/dashboard/manageproducts">Manage products</Link></li> */}
                            </>
                        }
                        <li className='mb-2 font-bold'><Link to="/">Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;