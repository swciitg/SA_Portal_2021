import {
  USER_DELETE_REQUEST,
  USER_EDIT_REQUEST,
  USER_LIST_REQUEST,
} from "../constants";
import * as api from "../api";

export const listUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: USER_LIST_REQUEST, payload: data.data.lists });
  } catch (error) {
    console.log(error.message);
  }
};

export const changeAdminStatus = (_id) => async (dispatch) => {
  try {
    const { data } = await api.changeAdminStatus(_id);
    dispatch({ type: USER_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: USER_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
