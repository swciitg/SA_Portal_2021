import React from "react";
import SideNavBar from "../SideNavBar";
import EventCard from "./EventCard";

function Event() {
  return (
    <>
    <SideNavBar/>
    <div className="text-white" style={{ backgroundColor: "#1E2532" }}>
      <div className="ml-24 mr-24 pt-24 mb-24 flex justify-between" style={{width: '70%'}}>
        <div className="text-4xl text-semibold">Events at IIT Guwahati</div>
        <div>
          <button
            className="px-6 py-1.5 font-medium"
            style={{ border: "1px solid #6A96EC", borderRadius: "4px"}}
          >
            RECENT
          </button>
        </div>
      </div>
      <div className="ml-24 flex gap-4 pb-16" style={{ overflowX: "scroll" }}>
        <div className="">
          <EventCard />
        </div>
        <div className="">
          <EventCard />
        </div>

        <div className="">
          <EventCard />
        </div>
      </div>
    </div>
    </>
  );
}

export default Event;
