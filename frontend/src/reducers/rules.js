import {
  RULE_CREATE_REQUEST,
  RULE_DELETE_REQUEST,
  RULE_LIST_REQUEST,
} from "../constants";

const rules = (rules = [], action) => {
  switch (action.type) {
    case RULE_LIST_REQUEST:
      return action.payload;
    case RULE_CREATE_REQUEST:
      return [...rules, action.payload];
    case RULE_DELETE_REQUEST:
      return rules.filter((form) => form._id !== action.payload);
    default:
      return rules;
  }
};

export default rules;
