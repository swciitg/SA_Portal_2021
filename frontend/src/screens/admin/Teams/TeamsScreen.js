import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";

const TeamsScreen = () => {
  return (
    <>
      <h1 className="text-4xl text-black pb-6">All Teams of Student Affairs</h1>

      <div className="text-xl text-blue pb-6"> 
        <Link to={`${BASEURL}/admin/events`}>
         Gymkhana Office Members
        </Link>
      </div>

      <div className="text-xl text-blue pb-6"> 
        <Link to={`${BASEURL}/admin/team/counselling`}>
         Counselling Cell Members
        </Link>
      </div>

        
      </>
  );
};

export default TeamsScreen;
