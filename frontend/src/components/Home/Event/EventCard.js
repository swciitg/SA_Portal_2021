import React from "react";
import rightArrow from "./arrow-right-solid.svg";
import moment from "moment";

import { BASEAPI } from "../../../constants";

const EventCard = ({ title, _id, eventDate }) => {
  return (
    <div>
      <div className="p-1 md:p-3 lg:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1">
        <div
          className="rounded-md relative"
          style={{ backgroundColor: "#2164E8" }}
        >
          <img
            className="rounded-md w-full md:w-60 lg:w-96 h-36 md:h-60 lg:h-80"
            src={`${BASEAPI}/home/events/${_id}`}
            alt="Event_Image"
          />
          <div className="ml-6 text-white mb-8">
            <div className="mt-4 text-base font-normal">
              {moment(eventDate).format("DD MMM YYYY")}
            </div>
            <div className="w-10/12 text-base md:text-lg font-semibold pb-8">
              {title}
            </div>
            <img
              className="w-4 m-2 absolute bottom-10 right-6"
              src={rightArrow}
              alt="Read_More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
