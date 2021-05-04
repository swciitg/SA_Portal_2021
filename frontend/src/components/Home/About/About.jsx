import React from "react";
import "./About.css";

function About() {
  return (
    <div className="Paragraphs sm:w-7/12 w-11/12">
      <div className="Heading">
        <p className="w-10/12">
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
      </div>
    </div>
  );
}

export default About;