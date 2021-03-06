import React from "react";
import styles from "./DropDownMenu.scss";
import ArrowIcon from "./ArrowIcon";
const DropDownMenu = ({
  boardName = "",
  boardDescription = "",
  imageURL = "",
  chairPersonName = "",
  setShowDropDown,
  notices = "",
  events = "",
  announcements = "",
  isScrolled,
}) => {
  const getCapitalisedString = (string) => {
    if (string === "SWC") return string;
    string = string.toLowerCase();
    let strings = string.split(" ");
    string = strings.map((str, id) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    return string.join(" ");
  };
  const handleMouseEnter = () => {
    setShowDropDown(true);
  };
  const handleMouseLeave = () => {
    setShowDropDown(false);
  };
  return (
    <div
      className="content"
      style={{ top: isScrolled && "-1rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="infoDiv">
        <span className="name text-2xl font-semibold">{boardName}</span>
        <p className="description text-sm leading-6 pr-4 mt-5">
          {boardDescription.substr(0, 400)}...
        </p>
      </div>
      <div className="externalLinksDiv">
        <a href={notices} target="_blank" rel="noreferrer">
          <div className="title">
            <span className="caption text-base font-semibold">Notices</span>
            <span className="arrowIcon">
              <ArrowIcon />
            </span>
          </div>
        </a>
        <p className="description text-base">{`View all the recent notices related to ${getCapitalisedString(
          boardName
        )}.`}</p>
        <a href={events} target="_blank" rel="noreferrer">
          <div className="title" style={{ marginTop: "24px" }}>
            <span className="caption text-base font-semibold">Events</span>
            <span className="arrowIcon">
              <ArrowIcon />
            </span>
          </div>
        </a>
        <p className="description text-base">{`View all the events organised by ${getCapitalisedString(
          boardName
        )}.`}</p>
        <a href={announcements} target="_blank" rel="noreferrer">
          <div className="title" style={{ marginTop: "24px" }}>
            <span className="caption text-base font-semibold">
              Announcements
            </span>
            <span className="arrowIcon">
              <ArrowIcon />
            </span>
          </div>
        </a>
        <p className="description text-base">{`View all the announcements related to ${getCapitalisedString(
          boardName
        )}.`}</p>
      </div>
      <div className="imageDiv">
        <img src={imageURL} className="image" alt="" />
        <span className="name font-sm">{chairPersonName}</span>
        <span className="description font-xs">{`Chairman ${boardName}`}</span>
      </div>
    </div>
  );
};

export default DropDownMenu;
