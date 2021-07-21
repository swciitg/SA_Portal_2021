import React from "react";
import logo from "../../../assets/iit_logo.png";
function Header() {
  return (
    <div className="header bg-white py-1">
      <div className="container flex justify-center mb-1.5 mt-0.5 ml-auto mr-auto">
        <span className="float-left ">
          <img src={logo} alt="1200px-IIT-Guwahati-Logo-1" border="0" />
        </span>
        <span className="float-left pl-2 flex items-center">
          <h1 className="text-sm ">
            STUDENTS' AFFAIRS SECTION, INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
          </h1>
        </span>
      </div>
    </div>
  );
}

export default Header;
