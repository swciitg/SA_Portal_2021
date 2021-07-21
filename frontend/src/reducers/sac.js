import {
  SAC_LINK_CREATE_REQUEST,
  SAC_LINK_DELETE_REQUEST,
  SAC_LINK_LIST_REQUEST,
} from "../constants";

const sacs = (sacs = [], action) => {
  switch (action.type) {
    case SAC_LINK_LIST_REQUEST:
      return action.payload;
    case SAC_LINK_CREATE_REQUEST:
      return [...sacs, action.payload];
    case SAC_LINK_DELETE_REQUEST:
      return sacs.filter((sac) => sac._id !== action.payload);
    default:
      return sacs;
  }
};

export default sacs;
