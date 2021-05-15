import {
  LINK_CREATE_REQUEST,
  LINK_LIST_REQUEST,
  LINK_DELETE_REQUEST,
  LINK_EDIT_REQUEST,
} from "../constants";
import * as api from "../api";

export const listLinks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLinks();
    dispatch({
      type: LINK_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLink = (id) => async (dispatch) => {
  try {
    await api.deleteLink(id);
    dispatch({ type: LINK_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLink = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createLink(formData);
    console.log(data);
    dispatch({ type: LINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editLink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editLink(id, formData);
    console.log(data);
    dispatch({ type: LINK_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
