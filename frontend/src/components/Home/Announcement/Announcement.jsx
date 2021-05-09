import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncement } from "../../../actions/announcement";
import { listCategories } from "../../../actions/category";
import CatFilter from "../HomeFilter/CatFilter";
import { renderCards } from "./util";

function Announcement() {
  const announcements = useSelector((state) => state.announcements);
  const categories = useSelector((state) => state.categories);
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
        <p className="w-max text-2xl sm:text-4xl font-semibold">
          Announcements
        </p>
        <CatFilter categories={categories} filterHandler={filterHandler} />
      </div>
      <div className="annoucement_card_container w-full">
        {renderCards(announcements, aCategory)}
      </div>
    </div>
  );
}

export default Announcement;
