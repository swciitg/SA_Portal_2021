import React from "react";

const ColorMarker = () => {
  return (
    <div className="hidden sm:block w-1/5">
      <div className="w-1/2 h-full inline-block">
        <div className="h-full flex justify-end items-center">
          <div
            className="rounded bg-blue-500 mr-3"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <span className="text-sm">Links</span>
        </div>
      </div>
      <div className="w-1/2 h-full inline-block">
        <div className="h-full flex justify-end items-center">
          <div
            className="rounded bg-indigo-500 mr-3"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <span className="text-sm">PDF's</span>
        </div>
      </div>
    </div>
  );
};

export default ColorMarker;
