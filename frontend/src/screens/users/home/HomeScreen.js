import React, { useState, useEffect } from "react";
import About from "../../../components/Home/About/About";
import Achievement from "../../../components/Home/Achievement/Achievement";
import Event from "../../../components/Home/Event/Event";
import Announcement from "../../../components/Home/Announcement/Announcement";
import SideNavBar from "../../../components/Home/SideNavBar/index";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [sideNavVisibility, setSideNavVisibility] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 600 && window.pageYOffset < 2000) {
        setSideNavVisibility(true);
      } else setSideNavVisibility(false);
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const stickyStyles = {
    position: "fixed",
    top: "150px",
    right: "5rem",
  };

  return (
    <div>
      <div className="home_sidenav_cont">
        <About />
        <div className="sidenav_layout">
          <div
            className="wrapper_sidenav_layout"
            style={sideNavVisibility ? stickyStyles : {}}
          >
            <SideNavBar showSideNav={sideNavVisibility} />
          </div>
        </div>
      </div>

      <Announcement />
      <Achievement />
      <Event />
    </div>
  );
};

export default HomeScreen;
