import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncement } from "../../../actions/announcement";
import { listCategories } from "../../../actions/category";
import CatFilter from "../HomeFilter/CatFilter";
import { renderCards } from "./util";

//import { Swiper } from "swiper/react";
//import "swiper/swiper.min.css";
//import "swiper/components/pagination/pagination.min.css";
//import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
//SwiperCore.use([Mousewheel, Pagination]);

function Announcement() {
  const announcements = useSelector((state) => state.announcements);
  const categories = useSelector((state) => state.categories);
  const [isScrolling, setIsScrolling] = useState(false);
  const [aCategory, setACategory] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAnnouncement());
    dispatch(listCategories());
  }, [dispatch]);

  const filterHandler = (e) => {
    let selectedCat = e.target.value;
    setACategory(selectedCat);
  };

  return (
    <div id="home_announcements" className="w-full sm:w-8/12 p-5 sm:pl-32">
      <div className="flex justify-between w-full mb-4 sm:mb-8">
        <p className="w-max text-2xl sm:text-3xl font-bold">Announcements</p>
        <CatFilter categories={categories} filterHandler={filterHandler} />
      </div>
      {/* <Swiper direction={'vertical'} slidesPerView={4} mousewheel={true} pagination={{
        "clickable": true
      }} className="mySwiper h-96 px-8"> */}
      {/* <SwiperSlide> */}
      <div
        className={`annoucement_card_container ${
          isScrolling && "announceScroll"
        } w-full pr-2`}
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
      >
        {renderCards(announcements, aCategory)}
      </div>
      {/* </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  );
}

export default Announcement;
