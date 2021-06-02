import {
    TEAM_CREATE_REQUEST,
    TEAM_LIST_REQUEST,
    TEAM_EDIT_REQUEST,
    TEAM_DELETE_REQUEST,
  } from "../constants";
  
  import * as api from "../api";

  export const listTeam = (ts) => async (dispatch) => {
    try {
      const { data } = await api.fetchTeam(ts);
      console.log(data);
      dispatch({
        type: TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (ts,id) => async (dispatch) => {
    try {
      await api.deleteTeam(ts,id);
      dispatch({ type: TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (ts,formData) => async (dispatch) => {
    try {
      const { data } = await api.createTeam(ts,formData);
      console.log(data);
      dispatch({ type: TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (ts,id, formData) => async (dispatch) => {
    try {

      const { data } = await api.editTeam(ts,id, formData);
      console.log(data);
      dispatch({ type: TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  