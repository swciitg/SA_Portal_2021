import { ABOUT_GET_REQUEST } from "../constants/index";

const about = (about = "", { type, payload }) => {
  switch (type) {
    case ABOUT_GET_REQUEST:
      return payload;
    default:
      return about;
  }
};

export default about;
