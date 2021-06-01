import {
    NEWSAC_TEAM_CREATE_REQUEST,
    NEWSAC_TEAM_LIST_REQUEST,
    NEWSAC_TEAM_EDIT_REQUEST,
    NEWSAC_TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchNewsac();
      dispatch({
        type: NEWSAC_TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteNewsac(id);
      dispatch({ type: NEWSAC_TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createNewsac(formData);
      console.log(data);
      dispatch({ type: NEWSAC_TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editNewsac(id, formData);
      console.log(data);
      dispatch({ type: NEWSAC_TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  