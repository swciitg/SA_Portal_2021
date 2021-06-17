import React from "react";
import { BASEAPI } from "../../../constants";
const TeamCard = (props) => {
  const teamcardwidth = {
    width: "460px",
    height: "480px",
  };
  const mobileCardWidth = {
    width: "320px",
  };
  return (
    <>
      <div className="hidden sm:block overflow-hidden">
        <div
          style={teamcardwidth}
          className="bg-blue-600  rounded-md  mt-16 mx-24"
        >
          <div className="bg-gray-200 rounded-md ">
            <img
              src={`${BASEAPI}/team/sa/${props.id}`}
              alt="ProfilePic"
              className="h-80  w-full object-contain "
            />
          </div>
          <div className="ml-8 text-2xl text-white mt-2">{props.name}</div>
          <div className="ml-8 text-lg text-white mt-1 mb-4">{props.post}</div>
          <svg
            className="w-full"
            width="420"
            height="1"
            viewBox="0 0 420 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="419.5"
              y2="0.500031"
              stroke="white"
              stroke-linecap="round"
            />
          </svg>
          <div className="flex justify-between mx-8 my-2">
            <div className="text-lg text-white">{props.email}</div>
            <div className="text-lg text-white">{props.contactNo}</div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden flex justify-center">
        <div style={mobileCardWidth} className="bg-blue-600  mt-8 rounded-md ">
          <div className="bg-gray-200 flex justify-center">
            <img
              src={`${BASEAPI}/team/sa/${props.id}`}
              alt="ProfilePic"
              className="h-64  w-auto object-contain rounded-sm "
            />
          </div>
          <div className="h-16">
            <div className="text-white text-2xl ml-4 pt-1">{props.name}</div>
            <div className="text-white text-lg ml-4 pt-1">{props.post}</div>
          </div>
          <svg
            className="w-full px-4 mt-3"
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
          <div className="h-20">
            <div className="text-white text-lg ml-4 pt-1">{props.email}</div>
            <div className="text-white text-lg ml-4 pt-1">
              +91-{props.contactNo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
