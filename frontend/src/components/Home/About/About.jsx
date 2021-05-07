import React, { useState, useEffect } from "react";
import "./About.css";
import { fetchAbout } from "../../../api/index";

function About() {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    const getAbout = async () => {
      try {
        const { data } = await fetchAbout();
        console.log(data.data);
        data.data && setAboutContent(`${JSON.parse(data.data.HTMLString)}`);
      } catch (error) {
        console.log(error);
      }
    };
    getAbout();
  }, []);

  useEffect(() => {
    console.log(aboutContent);
    document.getElementById("home_about").innerHTML = aboutContent;
  }, [aboutContent]);

  return (
    <>
      <div
        id="home_about"
        className="flex flex-col items-start sm:w-7/12 w-11/12 p-5 sm:py-12 sm:pl-32"
        style={{ color: "#1e2532" }}
      ></div>
    </>
  );
}

export default About;

{
  /* <div className="Heading">
        <p className="w-12/12 font-bold">
          Welcome to The Students Affairs Board, IIT Guwahati
        </p>
      </div>
      <div className="Content">
        <p className="pt-5">
          Students' Affairs Board (SAB), IIT Guwahati, is a student body for all
          academic-related issues of IIT Guwahati students. The SAB is intended
          as a student forum that will strive to redress the academic problems
          and concerns of the entire student community of IIT Guwahati. It is a
          link unit between the students and the administration and is
          responsible for redirecting the Academic issues of the students to the
          appropriate administrative authority.
        </p>
      </div> */
}
