import React from "react";
import teamimage from "../../../assets/team.jpg";

const TeamCard = (props) => {
  return (
    <div className="bg-blue-600 w-full md:w-96 md:ml-8 mt-2 rounded-md">
      <img src={props.imagePath} alt="ProfilePic" className="h-80" />
      <div className="h-28">
        <div className="flex flex-row justify-between mt-2 mb-3 mx-1">
          <div className="text-white text-2xl">{props.name}</div>
          <div className="text-white text-lg">{props.post}</div>
        </div>
        <svg
          className="mx-2.5"
          width="360"
          height="1"
          viewBox="0 0 360 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="0.5"
            x2="359.5"
            y2="0.500031"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
        <div className="flex justify-between space-x-12 mt-3 mx-1">
          <div className="text-white text-lg">{props.email}</div>
          <div className="text-white text-lg">+91-{props.contactNo}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
