import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASEURL } from "../constants";
// const AdminRoutes = (props) => {
//   let loginBool = document.cookie.includes("sa-portal-session");
//   const Component = props.component;

//   return loginBool ? (
//     <Component {...props} />
//   ) : (
//     <Redirect to={{ pathname: "/admin" }} />
//   );
// };

const AdminRoute = ({ component: Component, ...rest }) => {
  let loginBool = document.cookie.includes("sa-portal-session");
  let { authData } = useSelector((state) => state.auth);
  console.log(authData);
  let isAdmin = authData && authData.isAdmin;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loginBool && isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: `${BASEURL}/admin` }} />;
        }
      }}
    />
  );
};

export default AdminRoute;
