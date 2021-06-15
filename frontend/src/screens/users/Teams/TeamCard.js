import React from "react";
import { BASEAPI } from "../../../constants";
const TeamCard = (props) => {
  const teamcardwidth = {
    width: "500px",
    height: "540px",
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
          <div className="ml-8 text-2xl text-white mt-2">{props.name}</div>
          <div className="ml-8 text-lg text-white mt-1 mb-4">{props.post}</div>
          <svg
            className="mx-4"
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
          <div className="flex justify-between mx-8 my-2">
            <div className="text-lg text-white">{props.email}</div>
            <div className="text-lg text-white">{props.contactNo}</div>
          </div>
        </div>
      </div>
      <div className="block md:hidden flex justify-center">
        <div className="bg-blue-600 w-9/12  mt-8 rounded-md border-2 border-black">
          <div className="bg-gray-200 flex justify-center">
            <img
              src={`${BASEAPI}/team/sa/${props.id}`}
              alt="ProfilePic"
              className="h-64  w-auto object-contain rounded-sm "
            />
          </div>
          <div className="h-16">
            <div className="text-white text-2xl ml-4">{props.name}</div>
            <div className="text-white text-lg ml-4">{props.post}</div>
          </div>
          <svg
            className="mx-2.5 "
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
