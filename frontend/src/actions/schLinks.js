import {
  SCHLINK_CREATE_REQUEST,
  SCHLINK_LIST_REQUEST,
  SCHLINK_EDIT_REQUEST,
  SCHLINK_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listSchLinks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSchLink();
    dispatch({
      type: SCHLINK_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSchLink = (id) => async (dispatch) => {
  try {
    await api.deleteSchLink(id);
    dispatch({ type: SCHLINK_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSchLink = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createSchLink(formData);
    dispatch({ type: SCHLINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editSchLink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editSchLink(id, formData);
    dispatch({ type: SCHLINK_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
