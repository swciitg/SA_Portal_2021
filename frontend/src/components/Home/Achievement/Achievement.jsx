import React,{useEffect,useState} from "react";
import AchievementCard from "./AchievementCard";
import useAchievementFetch from "./hooks/useAchievementFetch";

function Achievement() {
  const achievementContent = useAchievementFetch();
  return (  
    <>
      <div
        id="home"
        className="w-full sm:w-8/12 p-5 sm:pl-32 flex flex-col items-center"
      >
        <div className="flex justify-between w-full">
          <p className=" font-bold text-xl sm:text-3xl">Student Achievements</p>
          <div className="flex items-center border-2 rounded-md px-6 py-2">
            <p>2021</p>
            <span></span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
        {achievementContent.map((achievement,idx) => {
          const {HTMLString} = achievement;
          const newString = HTMLString.replace('"',"")
          const newString1 = newString.replace('"',"")
          return (<AchievementCard str={newString1} />)
          })}
        
        </div></div>
    </>
  );
}

export default Achievement;
