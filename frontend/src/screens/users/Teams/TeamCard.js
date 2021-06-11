import React from "react";
import { BASEAPI } from "../../../constants";
const TeamCard = (props) => {
  return (
    <div className="bg-blue-600 w-9/12 sm:w-96  md:ml-8 mt-8 rounded-md border-2 border-black">
      <div className="bg-gray-200">
        <img
          src={`${BASEAPI}/team/sa/${props.id}`}
          alt="ProfilePic"
          className="h-80  w-full object-contain rounded-sm"
        />
      </div>
      <div className="h-16">
        <div className="flex flex-row justify-between pt-6 mb-3 mx-1">
          <div className="text-white text-2xl w-48 truncate">{props.name}</div>
          <div className="text-white text-lg w-48 text-right truncate">
            {props.post}
          </div>
        </div>
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
      <div className="h-16">
        <div className="flex justify-between mt-3 mx-1 mb-3">
          <div className="text-white text-lg w-48 truncate">{props.email}</div>
          <div className="text-white text-lg w-48 text-right">
            +91-{props.contactNo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
