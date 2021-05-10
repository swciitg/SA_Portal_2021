import {
  RULE_CREATE_REQUEST,
  RULE_LIST_REQUEST,
  RULE_EDIT_REQUEST,
  RULE_DELETE_REQUEST,
} from "../constants";
import * as api from "../api";

export const listRules = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRule();
    dispatch({
      type: RULE_LIST_REQUEST,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRule = (id) => async (dispatch) => {
  try {
    await api.deleteRule(id);
    dispatch({ type: RULE_DELETE_REQUEST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRule = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createRule(formData);
    console.log(data);
    dispatch({ type: RULE_CREATE_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editRule = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editRule(id, formData);
    console.log(data);
    dispatch({ type: RULE_EDIT_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
