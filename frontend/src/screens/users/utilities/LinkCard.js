import React, { useState } from "react";
import dArrow from "../../../assets/ArrowDown.svg";
import uArrow from "../../../assets/ArrowUp.svg";
import SubLinks from "./SubLinks";

const LinkCard = ({ details }) => {
  const { name, sublinks } = details;
  const [showSublinks, setShowSublinks] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowSublinks(!showSublinks)}
        className="linkCard h-auto mt-5 mb-1 p-3 px-5 bg-white rounded-sm w-full text-left flex justify-between"
      >
        <span
          className="text-base"
          style={{ fontFamily: "Red Hat Display", fontWeight: "500" }}
        >
          {name}
        </span>
        <span>
          <img src={!showSublinks ? dArrow : uArrow} alt=">" />
        </span>
      </button>
      {showSublinks && sublinks.length !== 0 && (
        <SubLinks sublinks={sublinks} />
      )}
    </div>
  );
};

export default LinkCard;
