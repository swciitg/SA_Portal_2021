import {
  NAVIGATION_CREATE_REQUEST,
  NAVIGATION_DELETE_REQUEST,
  NAVIGATION_LIST_REQUEST,
  NAVIGATION_EDIT_REQUEST,
} from "../constants";
import * as api from "../api";
import showToast from "../utils/showToast";

export const listNavs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNavigation();
    dispatch({ type: NAVIGATION_LIST_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNav = (nav) => async (dispatch) => {
  try {
    const { data } = await api.createNavigation(nav);
    dispatch({ type: NAVIGATION_CREATE_REQUEST, payload: data.data });
    showToast({ msg:"navigation created successfully", type:"success" });
  } catch (error) {
    console.log(error.message);
    showToast({ msg: "something went wrong", type: "error" });
  }
};

export const editNav = (id, nav) => async (dispatch) => {
  try {
    const { data } = await api.editNavigation(id, nav);
    dispatch({ type: NAVIGATION_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNav = (id) => async (dispatch) => {
  try {
    await api.deleteNavigation(id);
    dispatch({ type: NAVIGATION_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
