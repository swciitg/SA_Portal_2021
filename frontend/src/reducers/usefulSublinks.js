import {
    USEFUL_SUBLINK_CREATE_REQUEST,
    USEFUL_SUBLINK_LIST_REQUEST,
    USEFUL_SUBLINK_DELETE_REQUEST,
  } from "../constants";
  
  const usefulsublinks = (sublinks = [], action) => {
    switch (action.type) {
      case USEFUL_SUBLINK_LIST_REQUEST:
        return action.payload;
      case USEFUL_SUBLINK_CREATE_REQUEST:
        return [...sublinks, action.payload];
      case USEFUL_SUBLINK_DELETE_REQUEST:
        return sublinks.filter((link) => link._id !== action.payload);
      default:
        return sublinks;
    }
  };
  
  export default usefulsublinks;
  