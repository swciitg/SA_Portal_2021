import {
    COUNSELLING_TEAM_CREATE_REQUEST,
    COUNSELLING_TEAM_LIST_REQUEST,
    COUNSELLING_TEAM_EDIT_REQUEST,
    COUNSELLING_TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCounselling();
      dispatch({
        type: COUNSELLING_TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteCounselling(id);
      dispatch({ type: COUNSELLING_TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createCounselling(formData);
      console.log(data);
      dispatch({ type: COUNSELLING_TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editCounselling(id, formData);
      console.log(data);
      dispatch({ type: COUNSELLING_TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  