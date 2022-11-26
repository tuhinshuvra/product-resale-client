import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvide';
import Logo from '../../../assets/logo/logo.png';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout()
            .then((result) => {
                toast.error('User Logout Successfully')
            })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>

        {/* <li><Link className='font-bold' to="/addCategory">Add Category</Link></li> */}
        {/* <li><Link className='font-bold' to="/addProduct">Add Product</Link></li> */}
        {/* <li><Link className='font-bold' to="/allProducts">All Products</Link></li> */}
        {/* <li><Link className='font-bold' to="/productList">Product List</Link></li> */}
        {/* <li><Link className='font-bold' to="/categoryList">Category List</Link></li> */}
        {/* <li><Link className='font-bold' to="/users">All User</Link></li> */}
        {/* <li><Link className='font-bold' to="/productOnMail">My Product</Link></li> */}
        <li><Link className='font-bold' to="/blogs">Blogs</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='font-bold' to="/dashboard">Dashboard</Link></li>
                    <li><Link className='font-bold' onClick={handleLogout} to="/">Logout</Link></li>
                </>
                :
                <li><Link className='font-bold' to="/login">Login</Link></li>
        }

    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={1} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
                        <img className=' w-16' src={Logo} alt="" />Easy Market</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;