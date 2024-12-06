import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ShopAll from "./pages/ShopAll";
import NotFoundPage from "./pages/NotFoundPage";
import Collection from "./pages/Collection";
import Bestsellers from "./pages/Bestsellers";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
