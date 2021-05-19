import {
  COURSE_CREATE_REQUEST,
  COURSE_LIST_REQUEST,
  COURSE_EDIT_REQUEST,
  COURSE_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse();
    dispatch({
      type: COURSE_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);
    dispatch({ type: COURSE_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(formData);
    console.log(data);
    dispatch({ type: COURSE_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editCourse = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editCourse(id, formData);
    console.log(data);
    dispatch({ type: COURSE_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
