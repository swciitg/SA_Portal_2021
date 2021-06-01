import {
    NEWSAC_TEAM_CREATE_REQUEST,
    NEWSAC_TEAM_DELETE_REQUEST,
    NEWSAC_TEAM_LIST_REQUEST,
  } from "../constants";
  
  const newsac = (newsac = [], action) => {
    switch (action.type) {
      case NEWSAC_TEAM_LIST_REQUEST:
        return action.payload;
      case NEWSAC_TEAM_CREATE_REQUEST:
        return [...newsac, action.payload];
      case NEWSAC_TEAM_DELETE_REQUEST:
        return newsac.filter(
          (team) => team._id !== action.payload
        );
      default:
        return newsac;
    }
  };
  
  export default newsac;