import {
    SAC_CREATE_REQUEST,
    SAC_LIST_REQUEST,
    SAC_EDIT_REQUEST,
    SAC_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";
  
  export const listSACs = () => async (dispatch) => {
    try {
      const { data } = await api.fetchSAC();
      dispatch({
        type: SAC_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteSAC = (id) => async (dispatch) => {
    try {
      await api.deleteSAC(id);
      dispatch({ type: SAC_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createSAC = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createSAC(formData);
      console.log(data);
      dispatch({ type: SAC_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editSAC = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editSAC(id, formData);
      console.log(data);
      dispatch({ type: SAC_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  