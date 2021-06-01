import { ABOUT_GET_REQUEST } from "../constants/index";
import * as api from "../api/index";

export const fetchAbout = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAbout();
    dispatch({
      type: ABOUT_GET_REQUEST,
      payload: `${JSON.parse(data.data.HTMLString)}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
