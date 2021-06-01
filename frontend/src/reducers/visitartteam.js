import {
    VISITART_TEAM_CREATE_REQUEST,
    VISITART_TEAM_DELETE_REQUEST,
    VISITART_TEAM_LIST_REQUEST,
  } from "../constants";
  
  const visitart = (visitart = [], action) => {
    switch (action.type) {
      case VISITART_TEAM_LIST_REQUEST:
        return action.payload;
      case VISITART_TEAM_CREATE_REQUEST:
        return [...visitart, action.payload];
      case VISITART_TEAM_DELETE_REQUEST:
        return visitart.filter(
          (team) => team._id !== action.payload
        );
      default:
        return visitart;
    }
  };
  
  export default visitart;