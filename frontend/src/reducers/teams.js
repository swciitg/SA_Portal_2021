import {
    TEAM_CREATE_REQUEST,
    TEAM_DELETE_REQUEST,
    TEAM_LIST_REQUEST,
  } from "../constants";
  
  const team = (team = [], action) => {
    switch (action.type) {
      case TEAM_LIST_REQUEST:
        return action.payload;
      case TEAM_CREATE_REQUEST:
        return [...team, action.payload];
      case TEAM_DELETE_REQUEST:
        return team.filter(
          (team) => team._id !== action.payload
        );
      default:
        return team;
    }
  };
  
  export default team;