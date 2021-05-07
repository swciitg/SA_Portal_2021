import {
  ANNOUNCEMENT_CREATE_REQUEST,
  ANNOUNCEMENT_LIST_REQUEST,
  ANNOUNCEMENT_EDIT_REQUEST,
  ANNOUNCEMENT_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listAnnouncement = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAnnouncement();
    dispatch({
      type: ANNOUNCEMENT_LIST_REQUEST,
      payload: data.data.announcements,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAnnouncement = (id) => async (dispatch) => {
  try {
    await api.deleteAnnouncement(id);
    dispatch({ type: ANNOUNCEMENT_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAnnouncement = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createAnnouncement(formData);
    console.log(data);
    dispatch({ type: ANNOUNCEMENT_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editAnnouncement = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editAnnouncement(id, formData);
    console.log(data);
    dispatch({ type: ANNOUNCEMENT_EDIT_REQUEST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
