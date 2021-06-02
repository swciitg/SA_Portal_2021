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
import RulesScreen from "./rules/RulesScreen";
import CoursesScreen from "./courses/CoursesScreen";
import SaScreen from "./Teams/SaScreen";
import GalleryCart from "../../components/Home/GalleryCart/GalleryCart";
import UtilitiesScreen from "./utilities/UtilitiesScreen";
const UserScreen = ({ location }) => {
  return (
    <>
      <Header />
      <TopNav />
      {/* <div class="min-h-screen bg-gray-400"></div> */}
      <GalleryCart />
      <MiddleNav activePath={location.pathname} />
      <Switch>
        <Route exact path={`${BASEURL}/`} component={HomeScreen} />
        <Route exact path={`${BASEURL}/forms`} component={FormScreen} />
        <Route exact path={`${BASEURL}/rules`} component={RulesScreen} />
        <Route exact path={`${BASEURL}/sa_courses`} component={CoursesScreen} />
        <Route exact path={`${BASEURL}/team`} component={SaScreen} />
        <Route
          exact
          path={`${BASEURL}/scholarships`}
          component={ScholarshipScreen}
        />
        <Route
          exact
          path={`${BASEURL}/utilities`}
          component={UtilitiesScreen}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default UserScreen;
