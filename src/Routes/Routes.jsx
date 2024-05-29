import { createBrowserRouter } from "react-router-dom";
import PriviteRoutes from "./PriviteRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About";
import Contact from "../pages/Home/Contact";
import AllProduct from "../pages/AllProduct/AllProduct";
import ViewProduct from "../pages/ViewProduct/ViewProduct";
import MyProfile from "../pages/Admin/MyProfile/MyProfile";
import AddNewProduct from "../pages/Admin/AddNewProduct/AddNewProduct";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/allProduct",
                element: <AllProduct />,
            },
            {
                path: "/allProduct/:id",
                element: <ViewProduct />,
                loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`),
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
        path: "/dashboard",
        element: <PriviteRoutes><DashboardLayout /> </PriviteRoutes>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "addNewProduct",
                element: <AddNewProduct />
            },
            {
                path: "manageProduct",
                element: <ManageProduct />
            },
            {
                path: "myProfile",
                element: <MyProfile />
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