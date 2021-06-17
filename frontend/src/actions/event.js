import {
    EVENT_EDIT_REQUEST,
    EVENT_CREATE_REQUEST,
    EVENT_DELETE_REQUEST,
    EVENT_LIST_REQUEST,
  } from "../constants";
  import * as api from "../api";
  
  export const createEvent = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createEvent(formData);
      dispatch({ type: EVENT_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const listEvent = () => async (dispatch) => {
    try {
      const { data } = await api.fetchEvent();
      dispatch({
        type: EVENT_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteEvent = (id) => async (dispatch) => {
    try {
      await api.deleteEvent(id);
      dispatch({ type: EVENT_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const editEvent = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editEvent(id, formData);
      dispatch({ type: EVENT_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  