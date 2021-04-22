import {
  ANNOUNCEMENT_SUCCESS,
  ANNOUNCEMENT_REQUEST,
  ANNOUNCEMENT_FAIL,
} from "../constants";
import * as api from "../api";

export const listAnnouncement = () => async (dispatch) => {
  try {
    dispatch({ type: ANNOUNCEMENT_REQUEST });
    const res = await api.fetchAnnouncement();
    const data = res.data;
    console.log(data);
    dispatch({ type: ANNOUNCEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANNOUNCEMENT_FAIL, payload: error.message });
  }
};
