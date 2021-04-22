import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomeScreen from "./screens/users/HomeScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import "./assets/main.css";
import { fetchUserAction } from "./actions/auth";
import NotFound from "./components/NotFound";
import Footer from "./components/Home/Footer/Footer";
import EventCard from "./components/Home/Footer/EventCard";
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
        <Route path={`${BASEURL}`} component={HomeScreen} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </BrowserRouter>
    // <>
    //   <Footer />
    //   <EventCard />
    // </>
  );
};

export default App;
