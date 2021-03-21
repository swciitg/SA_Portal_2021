import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      Not Found!
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
