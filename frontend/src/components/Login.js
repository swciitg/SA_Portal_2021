import React from "react";
import { LOGOUT_URL, LOGIN_URL } from "../constants";
import { useSelector } from "react-redux";

const Login = () => {
  let loginBool = document.cookie.includes("sa-portal-session");

  const auth = useSelector((state) => state.auth);

  console.log(auth.authData);
  const name = auth.authData?.name.split(" ")[0];
  const logoutHandler = () => {
    window.open(LOGOUT_URL, "_self");
  };

  const loginHandler = () => {
    window.open(LOGIN_URL, "_self");
  };

  const btn = loginBool ? (
    <>
      <h1 className="mr-2">Hi {name}</h1>
      <button onClick={logoutHandler}> Logout</button>
    </>
  ) : (
    <button onClick={loginHandler}> Login</button>
  );

  return btn;
};

export default Login;
