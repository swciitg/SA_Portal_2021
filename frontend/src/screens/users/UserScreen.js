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
import Teams from "./Teams/Teams";
import GalleryCart from "../../components/Home/GalleryCart/GalleryCart";
import NestedLinksScreen from "./nestedLinks/NestedLinksScreen";

import { listLinks } from "../../actions/utilities";
import { listsacLinks } from "../../actions/sac";
import { listUsefulLinks } from "../../actions/useful.links";

const UserScreen = ({ location }) => {
  return (
    <>
      <Header />
      <TopNav />
      {/* <div className="min-h-screen bg-gray-400"></div> */}
      <GalleryCart />
      <MiddleNav activePath={location.pathname} />
      <Switch>
        <Route exact path={`${BASEURL}/`} component={HomeScreen} />
        <Route exact path={`${BASEURL}/forms`} component={FormScreen} />
        <Route exact path={`${BASEURL}/rules`} component={RulesScreen} />
        <Route exact path={`${BASEURL}/sa_courses`} component={CoursesScreen} />
        {/* SAC Route */}
        <Route
          exact
          path={`${BASEURL}/sac`}
          render={(props) => (
            <NestedLinksScreen
              {...props}
              name="SAC"
              resourseName="sacs"
              fetchData={listsacLinks}
            />
          )}
        />
        <Route exact path={`${BASEURL}/team`} component={Teams} />
        <Route
          exact
          path={`${BASEURL}/scholarships`}
          component={ScholarshipScreen}
        />
        {/* Utilities Route */}
        <Route
          exact
          path={`${BASEURL}/utilities`}
          render={(props) => (
            <NestedLinksScreen
              {...props}
              name="Utilities"
              resourseName="links"
              fetchData={listLinks}
            />
          )}
        />
        {/* Useful Links Route */}
        <Route
          exact
          path={`${BASEURL}/useful-links`}
          render={(props) => (
            <NestedLinksScreen
              {...props}
              name="Useful Links"
              resourseName="usefulLinks"
              fetchData={listUsefulLinks}
            />
          )}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default UserScreen;
