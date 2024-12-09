import {createBrowserRouter} from "react-router-dom";
import NotFoundPage from "../../../pages/NotFoundPage";
import HomePage from "../../../pages/HomePage";
import AboutUs from "../../../pages/AboutUs";
import ShopAll from "../../../pages/ShopAll";
import Collection from "../../../pages/Collection";
import Bestsellers from "../../../pages/Bestsellers";
import Blog from "../../../pages/Blog";
import React from "react";
import {RootLayout} from "./layouts/root-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/shop-all",
                element: <ShopAll />,
            },
            {
                path: "/collection",
                element: <Collection />,
            },
            {
                path: "/bestsellers",
                element: <Bestsellers />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
        ],
    },
]);
