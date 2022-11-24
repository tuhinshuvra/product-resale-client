import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Products/Product";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/products',
                element: <Product></Product>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router
