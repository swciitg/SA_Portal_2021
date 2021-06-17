import { GET_USER } from "../constants";
import * as api from "../api";

export const fetchUserAction = () => async (dispatch) => {
  try {
    const res = await api.fetchUser();
    dispatch({ type: GET_USER, data: res.data });
  } catch (error) {
    console.log(error);
  }
};
