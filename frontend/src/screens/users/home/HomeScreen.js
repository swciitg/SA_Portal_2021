import React, { useState, useEffect } from "react";
import About from "../../../components/Home/About/About";
import Achievement from "../../../components/Home/Achievement/Achievement";
import Event from "../../../components/Home/Event/Event";
import Announcement from "../../../components/Home/Announcement/Announcement";
import SideNavBar from "../../../components/Home/SideNavBar/index";

const HomeScreen = () => {
  const [sideNavVisibility, setSideNavVisibility] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 600 && window.pageYOffset < 2250) {
        setSideNavVisibility(true);
      } else setSideNavVisibility(false);
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <SideNavBar showSideNav={sideNavVisibility} />
      <About />
      <Announcement />
      <Achievement />
      <Event />
    </div>
  );
};

export default HomeScreen;
