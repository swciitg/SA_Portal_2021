import { GET_USER } from "../constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, authData: action.data };
    default:
      return state;
  }
};

export default authReducer;
