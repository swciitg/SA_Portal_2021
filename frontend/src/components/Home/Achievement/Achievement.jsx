import React, { useEffect, useState } from "react";
import AchievementCard from "./AchievementCard";
import Filter from "./Filter";
import useAchievementFetch from "./hooks/useAchievementFetch";

function Achievement() {
  const achievementContent = useAchievementFetch();
  const [achievements, setAchievements] = useState(achievementContent);
  const [years, setYears] = useState([]);

  const filterChange = (e) => {
    const selectedYr = parseInt(e.target.value);
    const reqAch = achievementContent.filter((el, idx) => {
      return new Date(el.creation).getFullYear() === selectedYr;
    });
    setAchievements(reqAch);
  };

  useEffect(() => {
    if (achievementContent.length !== 0) {
      const yrAr = achievementContent.map((el) => {
        return new Date(el.creation).getFullYear();
      });
      const unYr = [...new Set(yrAr)];
      setYears(unYr);
    }
    setAchievements(achievementContent);
  }, [achievementContent]);

  return (
    <>
      <div
        id="home_achievements"
        className="w-full sm:w-8/12 p-5 sm:pl-32 mt-3 sm:mt-5 flex flex-col items-center"
      >
        <div className="flex justify-between w-full">
          <p className="font-bold text-xl sm:text-3xl">Student Achievements</p>
          <Filter years={years} filterHandler={filterChange} />
        </div>
        <div className="flex flex-wrap justify-between">
          {[...achievements].splice(0, 4).map((achievement, idx) => {
            const { HTMLString, _id } = achievement;
            //const newString = HTMLString.replace('"', "");
            //const newString1 = newString.replace('"', "");
            return <AchievementCard key={_id} str={JSON.parse(HTMLString)} />;
          })}
        </div>
      </div>
      {achievements.length === 0 && (
        <p className="w-full sm:w-8/12 py-2 pl-5 sm:pl-32 text-base text-gray-400">
          No achievements
        </p>
      )}
    </>
  );
}

export default Achievement;
