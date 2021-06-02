import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";
import {teams} from "./TeamScreen/constant";
const AllTeamsScreen = () => {
  return (
    <>
      <h1 className="text-4xl text-black pb-6">All Teams of Student Affairs</h1>

      {teams.map(({ team, ts }) => {
        return (
          <Link
            to={{
              pathname: `${BASEURL}/admin/team/${ts}`,
            }}
          >
            <div className="text-xl text-blue pb-6"> 
              {team} Members
            </div>
            
          </Link>
            
        );
      })}        
      </>
  );
};

export default AllTeamsScreen;
