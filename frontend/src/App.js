import React, { useEffect } from "react";
import "./App.css";
//import OutlookLogin from "./components/OutlookLogin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomeScreen from "./screens/users/HomeScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import "./assets/main.css";
import { fetchUserAction } from "./actions/auth";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
