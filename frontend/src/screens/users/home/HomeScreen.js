import React from "react";
import About from "../../../components/Home/About/About";
import Achievement from "../../../components/Home/Achievement/Achievement";
import Event from "../../../components/Home/Event/Event";
import Announcement from "../../../components/Home/Announcement/Announcement";

const HomeScreen = () => {
  return (
    <div>
      <br />
      <About />
      <Achievement />
      <Announcement />
      <Event />
    </div>
  );
};

export default HomeScreen;
