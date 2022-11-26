import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvide';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <>
            <progress className=' progress w-56' ></progress>
            <h3 className=' text-center font-bold my-auto'>Loading .................</h3>
        </>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;