import {
  USER_DELETE_REQUEST,
  USER_EDIT_REQUEST,
  USER_LIST_REQUEST,
} from "../constants";

const users = (users = [], action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return action.payload;
    case USER_EDIT_REQUEST:
      return [
        ...users.filter((user) => user._id !== action.payload._id),
        action.payload,
      ];
    case USER_DELETE_REQUEST:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};

export default users;
