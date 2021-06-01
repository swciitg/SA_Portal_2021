import React, { useEffect } from "react";
import "./UtilitiesScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { listLinks } from "../../../actions/utilities";
import LinkCard from "./LinkCard";

const UtilitiesScreen = () => {
  const links = useSelector((state) => state.links);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listLinks());
  }, [dispatch]);

  return (
    <div className="container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <p className="text-2xl sm:text-3xl font-bold mb-6">Utilities</p>
      {links &&
        links.map((link, idx) => {
          return <LinkCard key={link._id} details={link} />;
        })}
    </div>
  );
};

export default UtilitiesScreen;
