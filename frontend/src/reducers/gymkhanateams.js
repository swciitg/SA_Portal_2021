import {
    GYMKHANA_TEAM_CREATE_REQUEST,
    GYMKHANA_TEAM_DELETE_REQUEST,
    GYMKHANA_TEAM_LIST_REQUEST,
  } from "../constants";
  
  const gymkhana = (gymkhana = [], action) => {
    switch (action.type) {
      case GYMKHANA_TEAM_LIST_REQUEST:
        return action.payload;
      case GYMKHANA_TEAM_CREATE_REQUEST:
        return [...gymkhana, action.payload];
      case GYMKHANA_TEAM_DELETE_REQUEST:
        return gymkhana.filter(
          (team) => team._id !== action.payload
        );
      default:
        return gymkhana;
    }
  };
  
  export default gymkhana;