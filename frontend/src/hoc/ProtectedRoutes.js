import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  let loginBool = document.cookie.includes("sa-portal-session");
  const Component = props.component;

  return loginBool ? (
    <Component {...props} />
  ) : (
    <Redirect to={{ pathname: "/admin" }} />
  );
};

export default ProtectedRoute;
