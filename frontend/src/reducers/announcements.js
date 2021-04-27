import {
  ANNOUNCEMENT_CREATE_REQUEST,
  ANNOUNCEMENT_DELETE_REQUEST,
  ANNOUNCEMENT_LIST_REQUEST,
} from "../constants";

const announcements = (announcements = [], action) => {
  switch (action.type) {
    case ANNOUNCEMENT_LIST_REQUEST:
      return action.payload;
    case ANNOUNCEMENT_CREATE_REQUEST:
      return [...announcements, action.payload];
    case ANNOUNCEMENT_DELETE_REQUEST:
      return announcements.filter(
        (announcement) => announcement._id !== action.payload
      );
    default:
      return announcements;
  }
};

export default announcements;
