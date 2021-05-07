import { CATEGORY_LIST_REQUEST } from "../constants";

const categories = (categories = [], action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return action.payload;
    default:
      return categories;
  }
};

export default categories;
