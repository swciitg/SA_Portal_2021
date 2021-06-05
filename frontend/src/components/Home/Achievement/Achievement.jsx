import React,{useEffect,useState} from "react";
import AchievementCard from "./AchievementCard";
import useAchievementFetch from "./hooks/useAchievementFetch";

function Achievement() {
  const achievementContent = useAchievementFetch();
  return (  
    <>
      <div
        id="home"
        className="w-full sm:w-7/12 md:w-3/4 flex flex-col items-center p-5 sm:py-12 sm:pl-32"
      >
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold">Student Achievements</p>
          <div className="flex items-center border-2 rounded-md px-6 py-2">
            <p>2021</p>
            <span></span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between pt-5"><div id="home_achievements" >
        {achievementContent.map((achievement,idx) => {
          const {HTMLString} = achievement;
          return (
            <>
            {console.log(HTMLString)}
            </>);
          })}
        
        </div></div></div>
    </>
  );
}

export default Achievement;
