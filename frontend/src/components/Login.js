import React from "react";
import { useDispatch } from "react-redux";
import MicrosoftLogin from "react-microsoft-login";
import { useHistory, useLocation } from "react-router-dom";
import { AUTH, LOGOUT, LOGOUT_URL, LOGIN_URL } from "../constants";
import { signin } from "../actions/auth";
import { TENANT_URL, CLIENT_ID } from "../config";
import jwt_decode from "jwt-decode";

const Login = () => {
  const logoutHandler = () => {
    window.open(LOGOUT_URL, "_self");
  };

  const loginHandler = () => {
    window.open(LOGIN_URL, "_self");
  };
  return <button onClick={loginHandler}>Login</button>;
};

export default Login;
