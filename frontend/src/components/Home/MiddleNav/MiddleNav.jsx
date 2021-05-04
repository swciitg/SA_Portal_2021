import React from "react";
import "./MiddleNav.css";

function MiddleNav() {
  return (
    <div className="flex md:justify-between w-full mt-2">
      <div className="flex flex-grow justify-between" id="nav-content">
        <div className="flex-grow md:flex items-center justify-center text-sm font-mono h-20 px-2 text-blue-550 hover:bg-gray-100 active-tab">
          <p className="text-center">Home</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2 ">
          <p className="text-center">Rules</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2">
          <p className="text-center">Scholarships</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2">
          <p className="text-center">SAC</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2">
          <p className="text-center">SA Courses</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2">
          <p className="text-center">Utilities</p>
        </div>
        <div className="hidden flex-grow md:flex items-center justify-center text-sm font-mono text-blue-550 hover:bg-gray-100 h-20 px-2">
          <p>Team</p>
        </div>
        <div className="flex px-8 items-center space-x-8 h-20 bg-accent hamberg">

          <a href="#">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20H28V17.3334H4V20ZM4 25.3334H28V22.6667H4V25.3334ZM4 14.6667H28V12H4V14.6667ZM4 6.66669V9.33335H28V6.66669H4Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
