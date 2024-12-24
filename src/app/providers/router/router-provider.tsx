import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { router } from "./router";
import { FC } from "react";
import React, { Suspense } from "react";

export const RouterProvider: FC = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <ReactRouterProvider router={router} />
  </Suspense>
);
