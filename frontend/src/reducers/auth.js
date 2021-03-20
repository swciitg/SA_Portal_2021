import { AUTH, LOGOUT, GET_USER } from "../constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    case GET_USER:
      return { ...state, authData: action.data };
    default:
      return state;
  }
};

export default authReducer;
