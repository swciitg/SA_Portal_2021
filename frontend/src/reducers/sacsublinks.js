import {
    SAC_SUBLINK_CREATE_REQUEST,
    SAC_SUBLINK_LIST_REQUEST,
    SAC_SUBLINK_DELETE_REQUEST,
  } from "../constants";
  
  const sacsublinks = (sublinks = [], action) => {
    switch (action.type) {
      case SAC_SUBLINK_LIST_REQUEST:
        return action.payload;
      case SAC_SUBLINK_CREATE_REQUEST:
        return [...sublinks, action.payload];
      case SAC_SUBLINK_DELETE_REQUEST:
        return sublinks.filter((link) => link._id !== action.payload);
      default:
        return sublinks;
    }
  };
  
  export default sacsublinks;
  