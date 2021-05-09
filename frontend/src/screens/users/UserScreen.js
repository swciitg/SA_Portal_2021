import React from "react";
import { Switch, Route } from "react-router-dom";
import { BASEURL } from "../../constants/index";
import Header from "../../components/Home/Header/Header";
import TopNav from "../../components/Home/TopNav/TopNav";
import Footer from "../../components/Home/Footer/Footer";
import MiddleNav from "../../components/Home/MiddleNav/MiddleNav";
import HomeScreen from "./home/HomeScreen";
import FormScreen from "./Forms/FormScreen";
import ScholarshipScreen from "./scholarships/ScholarshipScreen";

const UserScreen = ({ location }) => {
  return (
    <>
      <Header />
      <TopNav />
      <div class="min-h-screen bg-gray-400"></div>
      <MiddleNav activePath={location.pathname} />
      <Switch>
        <Route exact path={`${BASEURL}/`} component={HomeScreen} />
        <Route exact path={`${BASEURL}/forms`} component={FormScreen} />
        <Route
          exact
          path={`${BASEURL}/scholarships`}
          component={ScholarshipScreen}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default UserScreen;
