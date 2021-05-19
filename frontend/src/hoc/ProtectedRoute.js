import React from "react";
import { Redirect, Route } from "react-router-dom";

// const ProtectedRoutes = (props) => {
//   let loginBool = document.cookie.includes("sa-portal-session");
//   const Component = props.component;

//   return loginBool ? (
//     <Component {...props} />
//   ) : (
//     <Redirect to={{ pathname: "/admin" }} />
//   );
// };

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let loginBool = document.cookie.includes("sa-portal-session");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loginBool) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/admin" }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
