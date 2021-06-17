import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";

import { listEvent } from "../../../actions/event";
import { listEventCategories } from "../../../actions/eventcategory";
import { eventallCards } from "./eventutil";
import CatFilter from "./EventCatfilter";

const Event = () => {
  const events = useSelector((state) => state.events);
  const categories = useSelector((state) => state.eventscategory);
  const [allCategory, setAllCategory] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEvent());
    dispatch(listEventCategories());
  }, [dispatch]);

  const filterHandler = (e) => {
    let selectedCat = e.target.value;
    setAllCategory(selectedCat);
  };

   const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: true,
            pagination: {
                clickable: true
            },
            breakpoints: {
              768: {
                  slidesPerView: 3,
                  spaceBetween: 10
              },
              
          },
        }
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
        <div className="text-lg md:text-4xl text-semibold ml-10 md:ml-0">
          Events at IIT Guwahati
        </div>
        <div className="ml-16 md:ml-0 px-6 py-1.5 font-medium">
          <CatFilter categories={categories} filterHandler={filterHandler} />
        </div>
      </div>
      <div className="px-4 md:px-10">
        <Swiper {...swiperParams} className="mySwiper">

          <div className=" overflow-x-auto mx-10 md:mx-32  flex gap-4 pb-10">
            {eventallCards(events, allCategory)}
          </div>
        </Swiper>
      </div>

    </div>
  );
};

export default Event;
