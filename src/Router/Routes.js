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
import ProductUpdate from "../Pages/Products/ProductUpdate";
import MyProduct from "../Pages/Products/MyProduct";
import PrivateRoute from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminRoute from "./AdminRoutes";


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



            {
                path: '/productList',
                element: <ProductList></ProductList>
            },
            {
                path: '/productOnMail',
                element: <MyProduct></MyProduct>,
                // loader: ({ params }) => fetch(`http://localhost:5000/productOnMail?email=${params.email}`)
            },
            {
                path: '/products/:Id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?category=${params.Id}`),
            },
            {
                path: '/updateProduct/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            // {
            //     path: '/users',
            //     element: <AllUsers></AllUsers>
            // },
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout>  </PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: '/dashboard',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            // {
            //     path: '/dashboard/addproduct',
            //     element: <AdminRoute> <Addproduct></Addproduct> </AdminRoute>
            // },
            {
                path: '/dashboard/addCategory',
                element: <AddCategory></AddCategory>
            },
            {
                path: '/dashboard/categoryList',
                element: <CategoryList></CategoryList>
            },
            {
                path: '/dashboard/updateCategory/:id',
                element: <CategoryUpdate></CategoryUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allProducts',
                element: <AllProduct></AllProduct>,
            },
            {
                path: '/dashboard/manageusers',
                element: <AdminRoute><AllUsers></AllUsers>   </AdminRoute>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <AdminRoute><Payment></Payment></AdminRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
            // },
        ])
    },
])

export default router
