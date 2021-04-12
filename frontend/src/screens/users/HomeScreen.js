import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";

const HomeScreen = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to="/sa/about">About Page</Link>
      <Link to="/sa/contact">Contact Page</Link>

      <Switch>
        <Route exact path="/sa/about" component={AboutScreen} />
        <Route exact path="/sa/contact" component={ContactScreen} />
      </Switch>
    </>
  );
};

export default HomeScreen;
