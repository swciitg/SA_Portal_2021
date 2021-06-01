import {
    HOSTEL_TEAM_CREATE_REQUEST,
    HOSTEL_TEAM_LIST_REQUEST,
    HOSTEL_TEAM_EDIT_REQUEST,
    HOSTEL_TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchHostel();
      console.log(data);
      dispatch({
        type: HOSTEL_TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteHostel(id);
      dispatch({ type: HOSTEL_TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createHostel(formData);
      console.log(data);
      dispatch({ type: HOSTEL_TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editHostel(id, formData);
      console.log(data);
      dispatch({ type: HOSTEL_TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  