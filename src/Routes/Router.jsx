import { createBrowserRouter } from "react-router";
import Header from "../Component/Header";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import DetailsLayout from "../Layout/DetailsLayout";
import SingnUp from "../Pages/SingnUp";
import AuthLayOut from "../Layout/AuthLayOut";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Component/Loader";


export const router = createBrowserRouter([
    {
        path: '/',
        hydrateFallbackElement: <Loader></Loader>,
        element: <MainLayOut></MainLayOut>,
        children:
            [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: 'categories/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                },
            ]
    },
    {
        path: '/card-details/:id',
        element: (<PrivateRoute><DetailsLayout></DetailsLayout></PrivateRoute>)
    },
    {
        path: '/auth',
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <SingnUp></SingnUp>
            },

        ]
    },
    {
        path: '/news',
        element: <h1>News layout</h1>
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    },
])