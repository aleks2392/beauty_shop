import {RouterProvider as ReactRouterProvider} from "react-router-dom";
import {router} from "./router";
import {FC} from "react";

export const RouterProvider: FC = () => <ReactRouterProvider router={router} fallbackElement={<p>Loading...</p>}/>;
