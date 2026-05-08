import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import SellPost from "../pages/sellPost/SellPost";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/products',
                Component: Products
            },
            {
                path: "sell-post",
                Component: SellPost
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            }
        ]
    }
])