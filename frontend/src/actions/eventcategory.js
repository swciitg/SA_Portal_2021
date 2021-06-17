import { EVENT_CATEGORY_LIST_REQUEST } from "../constants";
import * as api from "../api";

export const listEventCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEventCategories();
    dispatch({
      type: EVENT_CATEGORY_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
