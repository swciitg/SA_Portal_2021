import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../constants/index";
const NotFound = () => {
  return (
    <div>
      Not Found!
      <br />
      <Link to={BASEURL}>Home</Link>
    </div>
  );
};

export default NotFound;
