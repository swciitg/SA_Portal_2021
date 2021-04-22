import {
  ANNOUNCEMENT_SUCCESS,
  ANNOUNCEMENT_REQUEST,
  ANNOUNCEMENT_FAIL,
  ANNOUNCEMENT_DELETE_SUCCESS,
  ANNOUNCEMENT_DELETE_REQUEST,
  ANNOUNCEMENT_DELETE_FAIL,
} from "../constants";

export const announcementReducer = (state = { announcement: [] }, action) => {
  switch (action.type) {
    case ANNOUNCEMENT_REQUEST:
      return { loading: true, ...state };
    case ANNOUNCEMENT_SUCCESS:
      return { loading: false, announcement: action.payload };
    case ANNOUNCEMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const announcementDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ANNOUNCEMENT_DELETE_REQUEST:
      return { loading: true };
    case ANNOUNCEMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ANNOUNCEMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
