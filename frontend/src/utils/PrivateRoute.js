import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ redirectTo, isLoggedIn, children }) => {
  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;