import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";

const TeamNav = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://media.discordapp.net/attachments/826942452539588638/842125739691081838/unknown.png?width=1440&height=488)",
        }}
        class=" h-96"
      >
        <div class=" text-4xl left-32 font-semibold text-white top-28 relative">
          Team Structure
        </div>
        <div class="ml-32 top-36 relative">
        <Link to={`${BASEURL}/team`}>
            <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
              Students Affairs Office
            </button>
        </Link>
          
        <Link to={`${BASEURL}/team/gymkhana`}>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
              Gymkhana Office
          </button>
        </Link>

        <Link to={`${BASEURL}/team/counselling`}>
            <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
                Counselling Cell
            </button>
        </Link>
          
        <Link to={`${BASEURL}/team/visitart`}>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Visiting Artists-in-residence
          </button>
        </Link>
          
        <Link to={`${BASEURL}/team/newsac`}>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            New SAC Building
          </button>
        </Link>

        <Link to={`${BASEURL}/team/hostels`}>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Hostels
          </button>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default TeamNav;
