import {
  FORM_CREATE_REQUEST,
  FORM_DELETE_REQUEST,
  FORM_LIST_REQUEST,
  FORM_EDIT_REQUEST,
} from "../constants";

const forms = (forms = [], action) => {
  switch (action.type) {
    case FORM_LIST_REQUEST:
      return action.payload;
    case FORM_CREATE_REQUEST:
      return [...forms, action.payload];
    case FORM_EDIT_REQUEST:
      return [...forms, action.payload];
    case FORM_DELETE_REQUEST:
      return forms.filter((form) => form._id !== action.payload);
    default:
      return forms;
  }
};

export default forms;
