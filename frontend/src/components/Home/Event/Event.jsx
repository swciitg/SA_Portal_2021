import React from "react";
import EventCard from "./EventCard";
import "./Event.css";

function Event() {
  return (
    <div
      id="home_events"
      className="text-white"
      style={{ backgroundColor: "#1E2532" }}
    >
      <div
        className="ml-5 sm:ml-32 mr-24 pt-24 mb-24 flex justify-between"
        style={{ width: "65%" }}
      >
        <div className="text-4xl text-semibold">Events at IIT Guwahati</div>
        <div>
          <button
            className="px-6 py-1.5 font-medium"
            style={{ border: "1px solid #6A96EC", borderRadius: "4px" }}
          >
            RECENT
          </button>
        </div>
      </div>
      <div
        className="events_container ml-5 sm:ml-32 flex gap-4 pb-16"
        style={{ overflowX: "scroll" }}
      >
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
  );
}

export default Event;
