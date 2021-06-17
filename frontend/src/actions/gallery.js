import {
  GALLERY_CREATE_REQUEST,
  GALLERY_DELETE_REQUEST,
  GALLERY_LIST_REQUEST,
} from "../constants";
import * as api from "../api";

export const listImages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchImages();
    dispatch({ type: GALLERY_LIST_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteImage = (id) => async (dispatch) => {
  try {
    await api.deleteImage(id);
    dispatch({ type: GALLERY_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createImage = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createImage(formData);
    dispatch({ type: GALLERY_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
