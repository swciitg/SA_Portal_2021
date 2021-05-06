import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncement } from "../../../actions/announcement";
import { renderCards } from "./util";

function Announcement() {
  const announcements = useSelector((state) => state.announcements);
  const [aCategory, setACategory] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAnnouncement());
  }, [dispatch]);

  return (
    <div className="w-full sm:w-7/12 md:w-3/4 p-5 sm:pl-32">
      <div className="mb-4 sm:mb-8">
        <p className="text-3xl sm:text-4xl font-semibold">Announcements</p>
      </div>
      <div className="annoucement_card_container w-full sm:w-11/12">
        {renderCards(announcements, aCategory)}
      </div>
    </div>
  );
}

export default Announcement;
