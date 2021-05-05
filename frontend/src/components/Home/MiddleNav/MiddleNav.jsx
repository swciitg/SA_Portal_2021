import React from "react";
import { Link } from "react-router-dom";
import "./MiddleNav.css";

function MiddleNav() {
  return (
    <div class="scroll flex md:mx-6 lg:mx-10 xl:mx-12 2xl:mx-44 overflow-x-scroll">
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32 font-blue-550">
        <p>Home</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>
          <Link to="/sa/rules">Rules</Link>
        </p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Scholarships</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>SAC</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32 text-center">
        <p>SA Courses</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Utilities</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Team</p>
      </div>
    </div>
  );
}

export default MiddleNav;
