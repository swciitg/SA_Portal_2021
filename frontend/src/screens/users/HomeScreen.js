import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import { BASEURL } from "../../constants/index";
import Header from "../../components/Home/Header/Header";
import TopNav from "../../components/Home/TopNav/TopNav";
import About from "../../components/Home/About/About";
import Achievement from "../../components/Home/Achievement/Achievement";
import Event from "../../components/Home/Event/Event";
import Footer from "../../components/Home/Footer/Footer";
import Announcement from "../../components/Home/Announcement/Announcement";
import MiddleNav from "../../components/Home/MiddleNav/MiddleNav";
const HomeScreen = () => {
  return (
    <>
      {/* <Link to={`${BASEURL}/about`}>About Page</Link>
      <Link to={`${BASEURL}/contact`}>Contact Page</Link> */}
      <Header />
      <TopNav />
      <div class="min-h-screen bg-gray-400"></div>
      <MiddleNav />
      <br />
      <About />
      <Achievement />
      <Announcement />
      <Event />
      <Footer />
      <Switch>
        <Route exact path={`${BASEURL}/about`} component={AboutScreen} />
        <Route exact path={`${BASEURL}/contact`} component={ContactScreen} />
      </Switch>
    </>
  );
};

export default HomeScreen;
