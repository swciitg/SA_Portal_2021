import {
  SCHLINK_CREATE_REQUEST,
  SCHLINK_LIST_REQUEST,
  SCHLINK_DELETE_REQUEST,
} from "../constants/index";

const schLinks = (schLinks = [], action) => {
  switch (action.type) {
    case SCHLINK_LIST_REQUEST:
      return action.payload;
    case SCHLINK_CREATE_REQUEST:
      return [...schLinks, action.payload];
    case SCHLINK_DELETE_REQUEST:
      return schLinks.filter((form) => form._id !== action.payload);
    default:
      return schLinks;
  }
};

export default schLinks;
