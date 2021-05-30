import {
  ACHIEVEMENT_CREATE_REQUEST,
  ACHIEVEMENT_LIST_REQUEST,
  ACHIEVEMENT_DELETE_REQUEST,
} from "../constants";

const achievements = (achievements = [], action) => {
  switch (action.type) {
    case ACHIEVEMENT_LIST_REQUEST:
      return action.payload;
    case ACHIEVEMENT_CREATE_REQUEST:
      return [...achievements, action.payload];
    case ACHIEVEMENT_DELETE_REQUEST:
      return achievements.filter((el) => el._id !== action.payload);
    default:
      return achievements;
  }
};

export default achievements;
