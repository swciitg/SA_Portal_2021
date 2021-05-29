import {
    TEAM_CREATE_REQUEST,
    TEAM_LIST_REQUEST,
    TEAM_EDIT_REQUEST,
    TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCounselling();
      dispatch({
        type: TEAM_LIST_REQUEST,
        payload: data.data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteCounselling(id);
      dispatch({ type: TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createCounselling(formData);
      console.log(data);
      dispatch({ type: TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editCounselling(id, formData);
      console.log(data);
      dispatch({ type: TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  