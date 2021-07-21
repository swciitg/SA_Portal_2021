import {
  SAC_LINK_CREATE_REQUEST,
  SAC_LINK_LIST_REQUEST,
  SAC_LINK_DELETE_REQUEST,
  SAC_LINK_EDIT_REQUEST,
  SAC_SUBLINK_CREATE_REQUEST,
  SAC_SUBLINK_LIST_REQUEST,
  SAC_SUBLINK_DELETE_REQUEST,
  SAC_SUBLINK_EDIT_REQUEST,
} from "../constants";
import * as api from "../api";

export const listsacLinks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchsacLinks();
    dispatch({
      type: SAC_LINK_LIST_REQUEST,
      payload: data.data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletesacLink = (id) => async (dispatch) => {
  try {
    await api.deletesacLink(id);
    dispatch({ type: SAC_LINK_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createsacLink = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createsacLink(formData);
    dispatch({ type: SAC_LINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editsacLink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editsacLink(id, formData);
    dispatch({ type: SAC_LINK_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const listsacSublinks = (link_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchsacSublinks(link_id);
    dispatch({
      type: SAC_SUBLINK_LIST_REQUEST,
      payload: data.data.sublinks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletesacSublink = (id, sublink_id) => async (dispatch) => {
  try {
    await api.deletesacSublink(id, sublink_id);
    dispatch({ type: SAC_SUBLINK_DELETE_REQUEST, payload: sublink_id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createsacSublink = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.createsacSublink(id, formData);
    dispatch({ type: SAC_SUBLINK_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editsacSublink = (link_id, sublink_id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editsacSublink(link_id, sublink_id, formData);
      dispatch({ type: SAC_SUBLINK_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
