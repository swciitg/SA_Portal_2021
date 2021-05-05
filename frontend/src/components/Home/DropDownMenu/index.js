import React from "react";
import styles from "./DropDownMenu.scss";

const DropDownMenu = ({
  boardName = "",
  boardDescription = "",
  imageURL = "",
  chairPersonName = "",
  setShowDropDown,
}) => {
  const handleMouseEnter = () => {
    console.log(boardName, boardDescription, imageURL, chairPersonName);
    setShowDropDown(true);
  };
  const handleMouseLeave = () => {
    setShowDropDown(false);
  };
  return (
    <div
      className="content"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="infoDiv">
        <span className="name text-2xl font-semibold">{boardName}</span>
        <p className="description text-lg">{boardDescription}</p>
      </div>
      <div className="externalLinksDiv">
        <div className="title">
          <span className="caption text-base font-semibold">Notices</span>
          <span className="arrowIcon">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.740283 8.93349L6.72712 2.94665L2.06964 2.96551C1.51339 2.95608 1.07027 2.51296 1.06084 1.95671C1.06084 1.40988 1.51339 0.957328 2.06022 0.957328L9.15014 0.938471C9.67811 0.938471 10.1495 1.40988 10.1495 1.93785L10.1307 9.02777C10.1307 9.5746 9.67811 10.0271 9.13128 10.0272C8.85787 10.0177 8.60237 9.91307 8.42418 9.73488C8.24504 9.55575 8.13191 9.29176 8.13191 9.02777L8.14133 4.36087L2.1545 10.3477C1.75852 10.7437 1.13626 10.7437 0.740283 10.3477C0.353732 9.96115 0.344304 9.32947 0.740283 8.93349Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <p className="description text-base">{`View all the recent notices related to ${boardName}.`}</p>
        <div className="title" style={{ marginTop: "24px" }}>
          <span className="caption text-base font-semibold">Events</span>
          <span className="arrowIcon">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.740283 8.93349L6.72712 2.94665L2.06964 2.96551C1.51339 2.95608 1.07027 2.51296 1.06084 1.95671C1.06084 1.40988 1.51339 0.957328 2.06022 0.957328L9.15014 0.938471C9.67811 0.938471 10.1495 1.40988 10.1495 1.93785L10.1307 9.02777C10.1307 9.5746 9.67811 10.0271 9.13128 10.0272C8.85787 10.0177 8.60237 9.91307 8.42418 9.73488C8.24504 9.55575 8.13191 9.29176 8.13191 9.02777L8.14133 4.36087L2.1545 10.3477C1.75852 10.7437 1.13626 10.7437 0.740283 10.3477C0.353732 9.96115 0.344304 9.32947 0.740283 8.93349Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <p className="description text-base">{`View all the events organised by ${boardName}.`}</p>
        <div className="title" style={{ marginTop: "24px" }}>
          <span className="caption text-base font-semibold">Announcements</span>
          <span className="arrowIcon">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.740283 8.93349L6.72712 2.94665L2.06964 2.96551C1.51339 2.95608 1.07027 2.51296 1.06084 1.95671C1.06084 1.40988 1.51339 0.957328 2.06022 0.957328L9.15014 0.938471C9.67811 0.938471 10.1495 1.40988 10.1495 1.93785L10.1307 9.02777C10.1307 9.5746 9.67811 10.0271 9.13128 10.0272C8.85787 10.0177 8.60237 9.91307 8.42418 9.73488C8.24504 9.55575 8.13191 9.29176 8.13191 9.02777L8.14133 4.36087L2.1545 10.3477C1.75852 10.7437 1.13626 10.7437 0.740283 10.3477C0.353732 9.96115 0.344304 9.32947 0.740283 8.93349Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <p className="description text-base">{`View all the announcements related to ${boardName}.`}</p>
      </div>
      <div className="imageDiv">
        <img src={imageURL} className="image" />
        <span className="name font-sm">{chairPersonName}</span>
        <span className="description font-xs">{`Chairman ${boardName}`}</span>
      </div>
    </div>
  );
};

export default DropDownMenu;
