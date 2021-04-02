import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomeScreen from "./screens/users/HomeScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import "./assets/main.css";
import { fetchUserAction } from "./actions/auth";
import NotFound from "./components/NotFound";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/" component={HomeScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
