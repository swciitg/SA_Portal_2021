import React from "react";
import { BASEAPI } from "../../../constants";
import TeamModal from "./TeamModal";
const TeamCard = (props) => {
  const teamcardwidth = {
    height: "450px",
  };
  const mobileCardWidth = {
    width: "320px",
  };
  function modalOpen(id) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("block");
  }
  return (
    <>
      <TeamModal
        key={props.key}
        id={props.id}
        name={props.name}
        post={props.post}
        imagePath={props.imagePath}
        contactNo={props.contactNo}
        email={props.email}
        postdesc={props.postdesc}
      />
      <div
        style={teamcardwidth}
        className="md:w-1/2 lg:w-1/4 hidden md:block overflow-hidden bg-blue-600 rounded-md mb-24 mx-4"
        onClick={() => {
          modalOpen(props.id);
        }}
      >
        <div className="bg-gray-200 rounded-md ">
          <img
            style={{ height: "300px" }}
            src={`${BASEAPI}/team/sa/${props.id}`}
            alt="ProfilePic"
            className="w-full object-contain "
          />
        </div>
        <div className="ml-3.5 text-2xl text-white font-semibold mt-4">
          {props.name}
        </div>
        <div className="ml-3.5 text-lg text-white mt-2 mb-2">{props.post}</div>
        <svg
          className="w-full"
          width="200"
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
        <div className="flex justify-between mx-3.5 my-2">
          <div className="text-sm text-white">{props.email}</div>
          <div className="text-sm text-white">{props.contactNo}</div>
        </div>
      </div>
      <div
        className="block md:hidden flex justify-center"
        onClick={() => {
          modalOpen(props.id);
        }}
      >
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
