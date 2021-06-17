import { CATEGORY_LIST_REQUEST } from "../constants";
import * as api from "../api";

export const listCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();
    dispatch({
      type: CATEGORY_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
