import React from "react";
import arrow from "../../../assets/ArrowRight.svg";
import ReactTooltip from "react-tooltip";
import "./Announcements.css";
import moment from "moment";

const AnnouceCard = ({ id, creation, title, description, link, category }) => {
  return (
    <div
      className="w-full px-5 py-3 bg-white rounded mt-1 mb-2.5"
      style={{
        boxShadow: "0px 2px 12px rgba(30, 37, 50, 0.14)",
        width: "98%",
        marginLeft: "5px",
      }}
    >
      <a href={link} rel="noreferrer" target="_blank">
        <a data-for={id} data-tip={description}>
          <p className="text-xs mb-0.5" style={{ color: "#111" }}>
            {moment(creation).format("DD MMM YYYY")}
          </p>
          <div className="flex w-full">
            <p
              className="inline w-11/12 tracking-wide"
              style={{ fontSize: "1.1rem" }}
            >
              {title}
            </p>
            <span className="w-1/12 flex justify-end cursor-pointer">
              <a href={link} rel="noreferrer" target="_blank">
                <img src={arrow} alt="->" />
              </a>
            </span>
          </div>
        </a>
        <ReactTooltip
          id={id}
          place="bottom"
          type="info"
          className="extraClass"
          //delayHide={1000}
          effect="solid"
          multiline={true}
        />
      </a>
    </div>
  );
};

export default AnnouceCard;
