import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import { BASEURL } from "../../constants/index";
const HomeScreen = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to={`${BASEURL}/about`}>About Page</Link>
      <Link to={`${BASEURL}/contact`}>Contact Page</Link>

      <Switch>
        <Route exact path={`${BASEURL}/about`} component={AboutScreen} />
        <Route exact path={`${BASEURL}/contact`} component={ContactScreen} />
      </Switch>
    </>
  );
};

export default HomeScreen;
