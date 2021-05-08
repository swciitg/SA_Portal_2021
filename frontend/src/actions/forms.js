import {
  FORM_CREATE_REQUEST,
  FORM_LIST_REQUEST,
  FORM_EDIT_REQUEST,
  FORM_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listForms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchForm();
    dispatch({
      type: FORM_LIST_REQUEST,
      payload: data.data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteForm = (id) => async (dispatch) => {
  try {
    await api.deleteForm(id);
    dispatch({ type: FORM_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createForm = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createForm(formData);
    console.log(data);
    dispatch({ type: FORM_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editForm = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editForm(id, formData);
    console.log(data);
    dispatch({ type: FORM_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
