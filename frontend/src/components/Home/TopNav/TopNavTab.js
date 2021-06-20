import React from "react";

const TopNavTab = ({
  className,
  boardName,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <p
        className={`text-center ${
          boardName === "Students Affair Board"
            ? "text-base"
            : "text-sm text-blue-600"
        }`}
      >
        {boardName.toUpperCase()}
      </p>
    </div>
  );
};

export default TopNavTab;
