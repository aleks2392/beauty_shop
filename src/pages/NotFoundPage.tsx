import React from "react";
import { NavLink } from "react-router-dom";
import errorStules from "../styles/error404.module.css";

const NotFoundPage = () => {
  return (
    <div className={errorStules.errorContainer}>
      <h1>Sorry dude but page not found 404</h1>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
};

export default NotFoundPage;
