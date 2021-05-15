import {
  LINK_CREATE_REQUEST,
  LINK_LIST_REQUEST,
  LINK_DELETE_REQUEST,
} from "../constants";

const links = (links = [], action) => {
  switch (action.type) {
    case LINK_LIST_REQUEST:
      return action.payload;
    case LINK_CREATE_REQUEST:
      return [...links, action.payload];
    case LINK_DELETE_REQUEST:
      return links.filter((link) => link._id !== action.payload);
    default:
      return links;
  }
};

export default links;
