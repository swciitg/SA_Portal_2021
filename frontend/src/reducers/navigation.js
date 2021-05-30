import {
  NAVIGATION_CREATE_REQUEST,
  NAVIGATION_DELETE_REQUEST,
  NAVIGATION_EDIT_REQUEST,
  NAVIGATION_LIST_REQUEST,
} from "../constants";

const navigations = (navigations = [], action) => {
  switch (action.type) {
    case NAVIGATION_LIST_REQUEST:
      return action.payload;
    case NAVIGATION_DELETE_REQUEST:
      return navigations.filter((nav) => nav._id !== action.payload);
    case NAVIGATION_EDIT_REQUEST:
      return [...navigations, action.payload];
    case NAVIGATION_CREATE_REQUEST:
      return [...navigations, action.payload];
    default:
      return navigations;
  }
};

export default navigations;
