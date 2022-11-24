import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Products/Product";
import SignUp from "../Pages/SignUp/SignUp";
import WrongRoute from "../Pages/Shared/ErrorDisplay/WrongRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories'),

            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            // {
            //     path: '/products',
            //     element: <Product></Product>,
            //     loader: () => fetch('http://localhost:5000/products'),
            // },
            {
                path: '/products/:Id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?category=${params.Id}`),
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
            {
                path: "*", element: <WrongRoute></WrongRoute>
            },
        ]
    }
])

export default router
