import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserScreen from "./screens/users/UserScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import "./assets/main.css";
import { fetchUserAction } from "./actions/auth";
import NotFound from "./components/NotFound";

import { BASEURL } from "./constants/index";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${BASEURL}/admin`} component={AdminScreen} />
        <Route path={`${BASEURL}`} component={UserScreen} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
