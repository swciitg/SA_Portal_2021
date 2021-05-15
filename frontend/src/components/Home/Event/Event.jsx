import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../../actions/event";
import { listEventCategories } from "../../../actions/eventcategory";
import EventCard from "./EventCard";
import { eventallCards } from "./eventutil";
// import "./Event.css";

const  Event = () => {

  const events = useSelector((state) => state.events);
    const categories = useSelector((state) => state.categories);
    const [allCategory, setACategory] = useState("all");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEvent());
        dispatch(listEventCategories());
    }, [dispatch]);

  return (
    <div
      id="home_events"
      className="text-white"
      style={{ backgroundColor: "#1E2532" }}
    >
      <div
        className=" sm:ml-32 mr-24 pt-10 mb-12 flex justify-between"
        style={{ width: "65%" }}
      >
        <div className="text-lg md:text-4xl text-semibold">Events at IIT Guwahati</div>
        <div >
          <button
            className="px-6 py-1.5 font-medium"
            style={{ border: "1px solid #6A96EC", borderRadius: "4px" }}
          >
            RECENT
          </button>
        </div>
      </div>
      <div
        className="events_container overflow-x-auto ml-5 sm:ml-32 flex gap-4 pb-4"
      >
        
        {eventallCards(events, allCategory)}
        
      </div>
    </div>
  );
}

export default Event;
