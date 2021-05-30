import {
    COUNSELLING_TEAM_CREATE_REQUEST,
    COUNSELLING_TEAM_DELETE_REQUEST,
    COUNSELLING_TEAM_LIST_REQUEST,
  } from "../constants";
  
  const counselling = (counselling = [], action) => {
    switch (action.type) {
      case COUNSELLING_TEAM_LIST_REQUEST:
        return action.payload;
      case COUNSELLING_TEAM_CREATE_REQUEST:
        return [...counselling, action.payload];
      case COUNSELLING_TEAM_DELETE_REQUEST:
        return counselling.filter(
          (team) => team._id !== action.payload
        );
      default:
        return counselling;
    }
  };
  
  export default counselling;