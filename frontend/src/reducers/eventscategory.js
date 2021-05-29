import { EVENT_CATEGORY_LIST_REQUEST } from "../constants";

const categories = (categories = [], action) => {
  switch (action.type) {
    case EVENT_CATEGORY_LIST_REQUEST:
      return action.payload;
    default:
      return categories;
  }
};

export default categories;