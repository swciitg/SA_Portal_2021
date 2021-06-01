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
import SACScreen from "./sac/SACScreen";
import CoursesScreen from "./courses/CoursesScreen";
import SaScreen from "./Teams/SaScreen";
import CounsellingScreen from "./Teams/CounsellingScreen";
import GymkhanaScreen from "./Teams/GymkhanaScreen";
import GalleryCart from "../../components/Home/GalleryCart/GalleryCart";
import NewsacScreen from "./Teams/NewsacScreen";
import VisitartScreen from "./Teams/VisitartScreen";
import HostelScreen from "./Teams/HostelScreen";
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
        <Route exact path={`${BASEURL}/sac`} component={SACScreen} />
        <Route exact path={`${BASEURL}/team`} component={SaScreen} />
        <Route exact path={`${BASEURL}/team/counselling`} component={CounsellingScreen} />
        <Route exact path={`${BASEURL}/team/gymkhana`} component={GymkhanaScreen} />
        <Route exact path={`${BASEURL}/team/newsac`} component={NewsacScreen} />
        <Route exact path={`${BASEURL}/team/visitart`} component={VisitartScreen} />
        <Route exact path={`${BASEURL}/team/hostels`} component={HostelScreen} />
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
