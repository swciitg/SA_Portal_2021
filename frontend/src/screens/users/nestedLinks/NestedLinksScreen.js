import React, { useEffect } from "react";
import "./NestedLinksScreen.css";
import { useDispatch, useSelector } from "react-redux";
import LinkCard from "./LinkCard";

//// PROPS USED ---
///  "name" :- Name of the page
///  "resourseName":- name of the data in the Redux global store
///  "fetchData":- Redux action creator fn. for data fetching

const NestedLinksScreen = (props) => {
  const { name, resourseName, fetchData } = props;
  const links = useSelector((state) => state[resourseName]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, name]);

  return (
    <div className="container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <p className="text-2xl sm:text-3xl font-bold mb-6">{name}</p>
      {links &&
        links.map((link, idx) => {
          return <LinkCard key={link._id} details={link} />;
        })}
    </div>
  );
};

export default NestedLinksScreen;
