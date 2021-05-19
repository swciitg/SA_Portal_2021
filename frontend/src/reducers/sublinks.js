import {
  SUBLINK_CREATE_REQUEST,
  SUBLINK_LIST_REQUEST,
  SUBLINK_DELETE_REQUEST,
} from "../constants";

const sublinks = (sublinks = [], action) => {
  switch (action.type) {
    case SUBLINK_LIST_REQUEST:
      return action.payload;
    case SUBLINK_CREATE_REQUEST:
      return [...sublinks, action.payload];
    case SUBLINK_DELETE_REQUEST:
      return sublinks.filter((link) => link._id !== action.payload);
    default:
      return sublinks;
  }
};

export default sublinks;
