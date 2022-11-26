import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvide';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
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

                        <li><Link className='my-1 font-bold' to="/dashboard/myOrders">My Orders</Link></li>
                        {
                            isSeller &&
                            <>
                                <li><Link className='my-1 font-bold' to="/dashboard/myBuyers">My Buyers</Link></li>
                                <li><Link className='mb-2 font-bold' to="/dashboard/sellerProduct">My Products</Link></li>
                                <li><Link className='my-1 font-bold' to="/dashboard/addProduct">Add a Product</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link className='my-1 font-bold' to="/dashboard/allProducts">All Products</Link></li>
                                <li><Link className='my-1 font-bold' to="/dashboard/addCategory">Add Category</Link></li>
                                {/* <li><Link className='my-1 font-bold' to="/dashboard/addProduct">Add a Product</Link></li> */}
                                <li><Link className='my-1 font-bold' to="/dashboard/allusers">Manage Users</Link></li>
                                <li><Link className='my-1 font-bold' to="/dashboard/categoryList">Manage Categories</Link></li>
                                <li><Link className='my-1 font-bold' to="/dashboard/productList">Manage Products</Link></li>
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