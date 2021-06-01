import {
    HOSTEL_TEAM_CREATE_REQUEST,
    HOSTEL_TEAM_DELETE_REQUEST,
    HOSTEL_TEAM_LIST_REQUEST,
  } from "../constants";
  
  const hostels = (hostels = [], action) => {
    switch (action.type) {
      case HOSTEL_TEAM_LIST_REQUEST:
        return action.payload;
      case HOSTEL_TEAM_CREATE_REQUEST:
        return [...hostels, action.payload];
      case HOSTEL_TEAM_DELETE_REQUEST:
        return hostels.filter(
          (team) => team._id !== action.payload
        );
      default:
        return hostels;
    }
  };
  
  export default hostels;