import {
  LINK_CREATE_REQUEST,
  LINK_LIST_REQUEST,
  LINK_DELETE_REQUEST,
  LINK_EDIT_REQUEST,
  SUBLINK_CREATE_REQUEST,
  SUBLINK_LIST_REQUEST,
  SUBLINK_DELETE_REQUEST,
  SUBLINK_EDIT_REQUEST,
} from "../constants";
import * as api from "../api";

export const listLinks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLinks();
    dispatch({
      type: LINK_LIST_REQUEST,
      payload: data.data.data,
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
    dispatch({ type: LINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editLink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editLink(id, formData);
    dispatch({ type: LINK_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const listSublinks = (link_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSublinks(link_id);
    dispatch({
      type: SUBLINK_LIST_REQUEST,
      payload: data.data.sublinks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSublink = (id, sublink_id) => async (dispatch) => {
  try {
    await api.deleteSublink(id, sublink_id);
    dispatch({ type: SUBLINK_DELETE_REQUEST, payload: sublink_id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSublink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.createSublink(id, formData);
    dispatch({ type: SUBLINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editSublink =
  (link_id, sublink_id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editSublink(link_id, sublink_id, formData);
      dispatch({ type: SUBLINK_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
