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
import SellerRoute from "./SellerRoutes";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyBuyers from "../Pages/Dashboard/MyBuyers";


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
                path: '/products/:Id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?category=${params.Id}`),
            },
            {
                path: '/updateProduct/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout>  </PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>,
            },
            // {
            //     path: '/dashboard/productOnMail',
            //     element: <MyProduct></MyProduct>,
            // },
            {
                path: '/dashboard/sellerProduct',
                element: <SellerRoute> <MyProduct></MyProduct></SellerRoute>,
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute> <MyBuyers></MyBuyers></SellerRoute>,
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
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
                element: <AdminRoute> <CategoryUpdate></CategoryUpdate></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute> <AddProduct></AddProduct></SellerRoute>,
            },
            {
                path: '/dashboard/allProducts',
                element: <AdminRoute> <AllProduct></AllProduct></AdminRoute>,
            },
            {
                path: '/dashboard/productList',
                element: <ProductList></ProductList>
            },
            {
                path: '/dashboard/manageusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
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
