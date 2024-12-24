import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../../pages/NotFoundPage";
import React from "react";
import { RootLayout } from "./layouts/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import("../../../pages/HomePage");
          return { Component: HomePage };
        },
      },
      {
        path: "about/",
        async lazy() {
          const { AboutUs } = await import("../../../pages/AboutUs");
          return { Component: AboutUs };
        },
      },
      {
        path: "shop-all/",
        async lazy() {
          const { ShopAll } = await import("../../../pages/ShopAll");
          return { Component: ShopAll };
        },
      },
      {
        path: "collection/",
        async lazy() {
          const { Collection } = await import("../../../pages/Collection");
          return { Component: Collection };
        },
      },
      {
        path: "bestsellers/",
        async lazy() {
          const { Bestsellers } = await import("../../../pages/Bestsellers");
          return { Component: Bestsellers };
        },
      },
      {
        path: "blog/",
        async lazy() {
          const { Blog } = await import("../../../pages/Blog");
          return { Component: Blog };
        },
      },
      {
        path: "product/",
        async lazy() {
          const { ProductCard } = await import(
            "../../../pages/productCard/ProductCard"
          );
          return { Component: ProductCard };
        },
      },
    ],
  },
]);
