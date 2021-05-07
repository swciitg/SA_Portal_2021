import React from "react";
import { isoToDate } from "./util";
import arrow from "../../../assets/ArrowRight.svg";

const AnnouceCard = ({ creation, title, description, link, category }) => {
  return (
    <div
      className="w-full px-5 py-3 bg-white rounded"
      style={{ boxShadow: "0px 2px 12px rgba(30, 37, 50, 0.14)" }}
    >
      <p className="text-xs mb-0.5" style={{ color: "#111" }}>
        {isoToDate(creation)}
      </p>
      <div className="flex w-full">
        <p className="inline text-base w-11/12">{title}</p>
        <span className="w-1/12 flex justify-end cursor-pointer">
          <a href={link} rel="noreferrer" target="_blank">
            <img src={arrow} alt="->" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default AnnouceCard;
