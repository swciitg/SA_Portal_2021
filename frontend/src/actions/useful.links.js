import {
  SAC_LINK_CREATE_REQUEST,
  SAC_LINK_LIST_REQUEST,
  SAC_LINK_DELETE_REQUEST,
  SAC_LINK_EDIT_REQUEST,
  SAC_SUBLINK_CREATE_REQUEST,
  SAC_SUBLINK_LIST_REQUEST,
  SAC_SUBLINK_DELETE_REQUEST,
  SAC_SUBLINK_EDIT_REQUEST,
  USEFUL_LINK_LIST_REQUEST,
  USEFUL_LINK_DELETE_REQUEST,
  USEFUL_LINK_CREATE_REQUEST,
  USEFUL_LINK_EDIT_REQUEST,
  USEFUL_SUBLINK_LIST_REQUEST,
  USEFUL_SUBLINK_DELETE_REQUEST,
  USEFUL_SUBLINK_CREATE_REQUEST,
  USEFUL_SUBLINK_EDIT_REQUEST,
} from "../constants";
import * as api from "../api";

export const listUsefulLinks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsefulLinks();
    dispatch({
      type: USEFUL_LINK_LIST_REQUEST,
      payload: data.data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUsefulLink = (id) => async (dispatch) => {
  try {
    await api.deleteUsefulLink(id);
    dispatch({ type: USEFUL_LINK_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUsefulLink = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createUsefulLink(formData);
    dispatch({ type: USEFUL_LINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editUsefulLink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editUsefulLink(id, formData);
    dispatch({ type: USEFUL_LINK_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const listUsefulSublinks = (link_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUsefulSublinks(link_id);
    dispatch({
      type: USEFUL_SUBLINK_LIST_REQUEST,
      payload: data.data.sublinks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsefulSublink = (id, sublink_id) => async (dispatch) => {
  try {
    await api.deleteUsefulSublink(id, sublink_id);
    dispatch({ type: USEFUL_SUBLINK_DELETE_REQUEST, payload: sublink_id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUsefulSublink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.createUsefulSublink(id, formData);
    dispatch({ type: USEFUL_SUBLINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editUsefulSublink = (link_id, sublink_id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editUsefulSublink(link_id, sublink_id, formData);
      dispatch({ type: USEFUL_SUBLINK_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
