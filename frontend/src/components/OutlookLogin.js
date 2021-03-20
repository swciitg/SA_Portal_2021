import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MicrosoftLogin from "react-microsoft-login";
import { useHistory, useLocation } from "react-router-dom";
import { AUTH, LOGOUT } from "../constants";
import { signin } from "../actions/auth";
import { TENANT_URL, CLIENT_ID } from "../config";
import jwt_decode from "jwt-decode";
const OutlookLogin = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [msalInstance, onMsalInstanceChange] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const loginHandler = (err, data, msal) => {
    if (err) {
      alert("Outlook Sign In was unsuccessful. Try again later");
    } else {
      const token = data.accessToken;
      const name = data.displayName;
      const email = data.mail;
      const result = { name, email };
      const decoded = jwt_decode(token);
      console.log(decoded);
      //console.log(name, email, token);
      try {
        dispatch({ type: AUTH, data: { result, token } });
        setUser(result);
        history.push("/admin");

        //dispatch(signin(result, history));
      } catch (error) {
        console.log(error);
      }
      if (data) {
        onMsalInstanceChange(msal);
      }
    }
  };

  const logoutHandler = () => {
    msalInstance.logout();
    dispatch({ type: LOGOUT });

    history.push("/admin");

    setUser(null);
  };

  return msalInstance ? (
    <button onClick={logoutHandler}>Logout</button>
  ) : (
    <MicrosoftLogin
      clientId={CLIENT_ID}
      withUserData={true}
      tenantUrl={TENANT_URL}
      authCallback={loginHandler}
    />
  );
};

export default OutlookLogin;
