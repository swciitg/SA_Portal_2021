import {
  COURSE_CREATE_REQUEST,
  COURSE_DELETE_REQUEST,
  COURSE_LIST_REQUEST,
} from "../constants";

const courses = (courses = [], action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return action.payload;
    case COURSE_CREATE_REQUEST:
      return [...courses, action.payload];
    case COURSE_DELETE_REQUEST:
      return courses.filter((form) => form._id !== action.payload);
    default:
      return courses;
  }
};

export default courses;
