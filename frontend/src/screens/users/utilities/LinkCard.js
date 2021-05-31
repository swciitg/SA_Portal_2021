import React from "react";
import dArrow from "../../../assets/ArrowDown.svg";

const LinkCard = ({ details }) => {
  return (
    <div>
      <button className="linkCard h-auto my-5 p-3 px-5 bg-white rounded-sm w-full text-left flex justify-between">
        <span>{details.name}</span>
        <span>
          <img src={dArrow} alt=">" />
        </span>
      </button>
    </div>
  );
};

export default LinkCard;
