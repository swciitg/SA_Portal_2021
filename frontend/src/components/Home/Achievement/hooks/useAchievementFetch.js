import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAchievements } from "../../../../actions/achievement";

const useAchievementFetch = () => {
  const achievementContent = useSelector((state) => state.achievements);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAchievements());
  }, [dispatch]);
  return achievementContent;
};

export default useAchievementFetch;
