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
      style={{cursor:'pointer'}}
    >
      <p className="text-center">{boardName}</p>
    </div>
  );
};

export default TopNavTab;
