import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";

const HomeScreen = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to="/about">About Page</Link>
      <Link to="/contact">Contact Page</Link>

      <Switch>
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/contact" component={ContactScreen} />
      </Switch>
    </>
  );
};

export default HomeScreen;
