import {
    GYMKHANA_TEAM_CREATE_REQUEST,
    GYMKHANA_TEAM_LIST_REQUEST,
    GYMKHANA_TEAM_EDIT_REQUEST,
    GYMKHANA_TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchGymkhana();
      dispatch({
        type: GYMKHANA_TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteGymkhana(id);
      dispatch({ type: GYMKHANA_TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createGymkhana(formData);
      console.log(data);
      dispatch({ type: GYMKHANA_TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editGymkhana(id, formData);
      console.log(data);
      dispatch({ type: GYMKHANA_TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  