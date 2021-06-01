import React from "react";
import "./About.css";

const Cont = ({ str }) => (
  <div
    id="home_about"
    className="flex flex-col items-start sm:w-7/12 w-11/12 p-5 sm:py-12 sm:pl-32"
    style={{ color: "#1e2532" }}
    dangerouslySetInnerHTML={{ __html: `${str}` }}
  ></div>
);

export default Cont;
