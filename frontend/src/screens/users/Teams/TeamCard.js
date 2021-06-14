import React from "react";
import { BASEAPI } from "../../../constants";
const TeamCard = (props) => {
  const teamcardwidth = {
    width: "564px",
    height: "580px",
  };
  return (
    <>
      <div className="hidden md:block overflow-hidden">
        <div
          style={teamcardwidth}
          className="bg-blue-600  rounded-md border-2 border-black mt-16 mx-24"
        >
          <div className="bg-gray-200">
            <img
              src={`${BASEAPI}/team/sa/${props.id}`}
              alt="ProfilePic"
              className="h-96  w-full object-contain rounded-sm "
            />
          </div>
          <div className="ml-8 text-2xl text-white mt-6">{props.name}</div>
          <div className="ml-8 text-lg text-white mt-2.5 mb-6">
            {props.post}
          </div>
          <svg
            width="513"
            height="2"
            viewBox="0 0 513 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1"
              x2="512.5"
              y2="1.00004"
              stroke="white"
              stroke-linecap="round"
            />
          </svg>
          <div className="flex justify-between mx-8 my-6">
            <div className="text-lg text-white">{props.email}</div>
            <div className="text-lg text-white">{props.contactNo}</div>
          </div>
        </div>
      </div>
      <div className="block md:hidden ">
        <div className="bg-blue-600 w-9/12 sm:w-96  md:ml-8 mt-8 rounded-md border-2 border-black">
          <div className="bg-gray-200">
            <img
              src={`${BASEAPI}/team/sa/${props.id}`}
              alt="ProfilePic"
              className="h-80  w-full object-contain rounded-sm"
            />
          </div>
          <div className="h-16">
            <div className="text-white text-2xl ml-4">{props.name}</div>
            <div className="text-white text-lg ml-4">{props.post}</div>
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
            <div className="text-white text-lg ml-4 ">{props.email}</div>
            <div className="text-white text-lg ml-4">+91-{props.contactNo}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
