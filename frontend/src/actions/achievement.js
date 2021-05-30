import {
  ACHIEVEMENT_CREATE_REQUEST,
  ACHIEVEMENT_LIST_REQUEST,
  ACHIEVEMENT_EDIT_REQUEST,
  ACHIEVEMENT_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listAchievements = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAchievement();
    dispatch({
      type: ACHIEVEMENT_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAchievement = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createAchievement(formData);
    console.log(data);
    dispatch({ type: ACHIEVEMENT_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editAchievement = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editAchievement(id, formData);
    console.log(data);
    dispatch({ type: ACHIEVEMENT_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAchievement = (id) => async (dispatch) => {
  try {
    await api.deleteAchievement(id);
    dispatch({ type: ACHIEVEMENT_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
