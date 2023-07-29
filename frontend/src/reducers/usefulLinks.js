import {
    USEFUL_LINK_LIST_REQUEST,
    USEFUL_LINK_DELETE_REQUEST,
    USEFUL_LINK_CREATE_REQUEST,
  } from "../constants";
  
  const usefulLinks = (usefulLinks = [], action) => {
    switch (action.type) {
      case USEFUL_LINK_LIST_REQUEST:
        return action.payload;
      case USEFUL_LINK_CREATE_REQUEST:
        return [...usefulLinks, action.payload];
      case USEFUL_LINK_DELETE_REQUEST:
        return usefulLinks.filter((usefulLink) => usefulLink._id !== action.payload);
      default:
        return usefulLinks;
    }
  };
  
  export default usefulLinks;
  