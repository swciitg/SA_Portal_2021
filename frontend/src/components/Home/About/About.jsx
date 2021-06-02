import React from "react";
import "./About.css";
import useAboutFetch from "./hooks/useAboutFetch";
import Cont from "./Cont";

function About() {
  const aboutContent = useAboutFetch();

  return <Cont str={aboutContent} />;
}

export default About;
