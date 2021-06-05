import React from "react";

const AchievementCard = ({ str }) => {
  return (
    <>
      <div className="flex flex-col w-full sm:w-96 mb-8 mt-8">
        <div dangerouslySetInnerHTML={{ __html: `${str}` }}></div>
        <svg
          className="w-full sm:w-96 mt-4"
          height="1"
          viewBox="0 0 398 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M397.938 1.00003L0.469238 1L0.469238 0L397.938 3.47478e-05L397.938 1.00003Z"
            fill="#D7DDE1"
          />
        </svg>
      </div>
    </>
  );
};

export default AchievementCard;
