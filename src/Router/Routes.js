import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Products/Product";
import SignUp from "../Pages/SignUp/SignUp";
import WrongRoute from "../Pages/Shared/ErrorDisplay/WrongRoute";
import AllProduct from "../Pages/Products/AllProduct";
import AddCategory from "../Pages/Categories/AddCategory/AddCategory";
import AddProduct from "../Pages/Products/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ProductList from "../Pages/Products/ProductList";
import CategoryList from "../Pages/Categories/CategoryList";
import CategoryUpdate from "../Pages/Categories/CategoryUpdate";


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
                path: '/addCategory',
                element: <AddCategory></AddCategory>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categoryList',
                element: <CategoryList></CategoryList>
            },
            {
                path: '/updateCategory/:id',
                element: <CategoryUpdate></CategoryUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/allProducts',
                element: <AllProduct></AllProduct>,
            },
            {
                path: '/productList',
                element: <ProductList></ProductList>
            },
            {
                path: '/products/:Id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?category=${params.Id}`),
            },

            {
                path: '/users',
                element: <AllUsers></AllUsers>
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
