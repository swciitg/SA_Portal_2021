import {
    TEAM_CREATE_REQUEST,
    TEAM_DELETE_REQUEST,
    TEAM_LIST_REQUEST,
  } from "../constants";
  
  const teams = (teams = [], action) => {
    switch (action.type) {
      case TEAM_LIST_REQUEST:
        return action.payload;
      case TEAM_CREATE_REQUEST:
        return [...teams, action.payload];
      case TEAM_DELETE_REQUEST:
        return teams.filter(
          (team) => team._id !== action.payload
        );
      default:
        return teams;
    }
  };
  
  export default teams;