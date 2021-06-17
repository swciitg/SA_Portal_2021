import React from "react";
import rightArrow from "./arrow-right-solid.svg";
import moment from "moment";

import { BASEAPI } from "../../../constants";

const EventCard = ({ title, _id, eventDate, link }) => {
  return (
    <div>
      <div class="p-1 md:p-3 lg:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1">
        <div
          className="rounded-md relative w-72 md:w-full h-80 md:h-full"
          style={{ backgroundColor: "#2164E8" }}
        >
          <img
            className="rounded-md w-72 md:w-60 lg:w-96 h-48 md:h-60 lg:h-80"
            src={`${BASEAPI}/home/events/${_id}`}
            alt="img"
          />
          <div className="ml-6 text-white mb-8">
            <div className="mt-4 text-base font-normal">
              {moment(eventDate).format("DD MMM YYYY")}
            </div>
            <div className="w-10/12 text-base md:text-lg font-semibold pb-8">
              {title}
            </div>
            <a
              href={link}
              className="hover:cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-4 m-2 absolute bottom-10 right-6"
                src={rightArrow}
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/mountain.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default EventCard;
