import { createBrowserRouter } from "react-router-dom";
import PriviteRoutes from "./PriviteRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About";
import Contact from "../pages/Home/Contact";
import AllProduct from "../pages/AllProduct/AllProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PriviteRoutes><MainLayout /></PriviteRoutes>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/allProduct",
                element: <AllProduct />,
                loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register   />
    }
])